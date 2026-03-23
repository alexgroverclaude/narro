import { createClient } from "@supabase/supabase-js";

// Server-only client — uses the service role key.
// Only import this in API routes / server components, never in client components.
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
