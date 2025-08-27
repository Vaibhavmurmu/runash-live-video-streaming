"use client";

import { createClient } from "@supabase/supabase-js";

// Create a Supabase client for client components using NEXT_PUBLIC variables.
export function createSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}
