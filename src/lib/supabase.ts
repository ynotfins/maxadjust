import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

/** Returns a Supabase client when public env is configured; otherwise null. */
export function getSupabase(): SupabaseClient | null {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
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
