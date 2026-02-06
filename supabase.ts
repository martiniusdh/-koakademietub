import { createClient } from '@supabase/supabase-js';

// Credentials are now loaded from .env.local
// Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Manglende Supabase-konfigurasjon! Sjekk .env.local');
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);
