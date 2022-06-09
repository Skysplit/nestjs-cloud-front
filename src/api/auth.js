import { createClient } from "@supabase/supabase-js";

const api = createClient(
  process.env.REACT_APP_PROVIDER_URL,
  process.env.REACT_APP_PROVIDER_KEY,
  { autoRefreshToken: true }
);

export const auth = api.auth;
