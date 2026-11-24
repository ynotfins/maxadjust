import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const LIMITS = { name: 200, email: 320, message: 5000, source: 100 } as const;
const MIN_FILL_MS = 2000;

type LeadPayload = {
    name?: unknown;
    email?: unknown;
    message?: unknown;
    source?: unknown;
    meta?: unknown;
    company?: unknown;
    elapsedMs?: unknown;
};

type RateLimiter = {
    limit(options: { key: string }): Promise<{ success: boolean }>;
};

function text(value: unknown, max: number) {
    return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/**
 * Lead intake.
 *
 * The browser never holds a Supabase key: this route validates the submission,
 * applies the bot filters and rate limit, then writes with the anon key on the
 * server. Supabase RLS stays insert-only, so a leaked key still cannot read.
 */
export async function POST(request: Request) {
    if (!request.headers.get("content-type")?.includes("application/json")) {
        return NextResponse.json({ error: "bad_request" }, { status: 400 });
    }

    let body: LeadPayload;
    try {
        body = (await request.json()) as LeadPayload;
    } catch {
        return NextResponse.json({ error: "bad_request" }, { status: 400 });
    }

    // Honeypot: hidden from people, irresistible to form bots. Accept and drop.
    if (text(body.company, 200).length > 0) {
        return NextResponse.json({ ok: true });
    }

    // A real person needs more than two seconds to fill this form.
    const elapsedMs = typeof body.elapsedMs === "number" ? body.elapsedMs : 0;
    if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) {
        return NextResponse.json({ ok: true });
    }

    const name = text(body.name, LIMITS.name);
    const email = text(body.email, LIMITS.email);
    const message = text(body.message, LIMITS.message);
    const source = text(body.source, LIMITS.source) || "unknown";

    if (
        !name ||
        message.length < 10 ||
        !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
    ) {
        return NextResponse.json({ error: "invalid" }, { status: 422 });
    }

    let env: Record<string, unknown> = {};
    try {
        env = (await getCloudflareContext({ async: true })).env as Record<
            string,
            unknown
        >;
    } catch {
        // next dev without the Cloudflare proxy: fall back to process.env
    }

    const limiter = env.LEAD_RATE_LIMITER as RateLimiter | undefined;
    if (limiter) {
        const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
        const { success } = await limiter.limit({ key: `lead:${ip}` });
        if (!success) {
            return NextResponse.json({ error: "rate_limited" }, { status: 429 });
        }
    }

    const supabase = getSupabase();
    if (!supabase) {
        return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }

    const meta =
        typeof body.meta === "object" && body.meta !== null
            ? (body.meta as Record<string, unknown>)
            : {};

    const { error } = await supabase.from("leads").insert({
        name,
        email,
        message,
        source,
        meta,
    });

    if (error) {
        console.error("lead insert failed:", error.message);
        return NextResponse.json({ error: "insert_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
