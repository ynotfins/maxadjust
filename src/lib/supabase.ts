import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/**
 * Returns a Supabase client when the server env is configured; otherwise null.
 *
 * Server-side only since the lead intake moved to /api/leads: SUPABASE_URL and
 * SUPABASE_ANON_KEY are Worker secrets, so the key never reaches the browser.
 * The NEXT_PUBLIC_ names remain as a fallback for older local setups.
 */
export function getSupabase(): SupabaseClient | null {
    const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key =
        process.env.SUPABASE_ANON_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return null;
    if (!client) client = createClient(url, key);
    return client;
}

/** @deprecated Prefer getSupabase() — kept for Alpha home ContactSection import path. */
export const supabase = new Proxy({} as SupabaseClient, {
    get(_target, prop) {
        const real = getSupabase();
        if (!real) {
            throw new Error(
                "Supabase is not configured (NEXT_PUBLIC_SUPABASE_URL / ANON_KEY).",
            );
        }
        return (real as unknown as Record<string | symbol, unknown>)[prop];
    },
});
