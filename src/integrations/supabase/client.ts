// Supabase Client Initialization with Environment Validation & Resilience
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const FALLBACK_URL = 'https://llgbobnhvnufyawlcwbj.supabase.co';
const FALLBACK_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZ2JvYm5odm51Znlhd2xjd2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzMDEzNTUsImV4cCI6MjEwMDg3NzM1NX0.zpcTqJheqt_-IQbUDyvn_2uNv1I1KNd-ZRZU53SGRRE';

/**
 * Validates if a string is a valid HTTP or HTTPS URL and not a placeholder.
 */
function getValidUrl(url?: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (
    !trimmed ||
    trimmed === 'undefined' ||
    trimmed === 'null' ||
    trimmed.includes('your_supabase') ||
    trimmed.includes('placeholder')
  ) {
    return '';
  }
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return trimmed;
    }
  } catch {
    return '';
  }
  return '';
}

/**
 * Validates if a string is a non-empty key and not a placeholder.
 */
function getValidKey(key?: string): string {
  if (!key || typeof key !== 'string') return '';
  const trimmed = key.trim();
  if (
    !trimmed ||
    trimmed === 'undefined' ||
    trimmed === 'null' ||
    trimmed.includes('your_supabase') ||
    trimmed.includes('placeholder')
  ) {
    return '';
  }
  return trimmed;
}

const envUrl = getValidUrl(import.meta.env.VITE_SUPABASE_URL);
const envAnonKey =
  getValidKey(import.meta.env.VITE_SUPABASE_ANON_KEY) ||
  getValidKey(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

// Use validated environment values or reliable production fallback values
export const SUPABASE_URL = envUrl || FALLBACK_URL;
export const SUPABASE_ANON_KEY = envAnonKey || FALLBACK_ANON_KEY;

// Configuration status flag
export const isSupabaseConfigured = Boolean(SUPABASE_URL) && Boolean(SUPABASE_ANON_KEY);

if (!isSupabaseConfigured) {
  console.error(
    "Supabase configuration warning: Missing or invalid Supabase URL or Anon Key. Check your .env file."
  );
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});