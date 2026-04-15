import { createClient as createSupabaseClient } from '@supabase/supabase-js'

/**
 * Creates a plain Supabase client for DB operations only (no auth).
 * Used in server components and server actions.
 */
export function createClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
