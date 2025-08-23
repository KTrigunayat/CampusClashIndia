import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Validate environment variables
const validateEnv = () => {
  const missingVars = [];
  if (!supabaseUrl) missingVars.push('VITE_SUPABASE_URL');
  if (!supabaseAnonKey) missingVars.push('VITE_SUPABASE_ANON_KEY');
  
  if (missingVars.length > 0) {
    const errorMessage = `Missing required environment variables: ${missingVars.join(', ')}`;
    if (import.meta.env.DEV) {
      console.error('Supabase Configuration Error:', errorMessage);
    } else {
      console.error('Supabase Configuration Error: Missing required environment variables');
    }
    return false;
  }
  return true;
};

// Initialize Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: true
  }
});

// Log connection status
if (import.meta.env.DEV) {
  supabase.auth.onAuthStateChange((event, session) => {
    console.log('Supabase auth event:', event, session);
  });
}

// Test connection on startup
const testConnection = async () => {
  if (!validateEnv()) return;
  
  try {
    const { data, error } = await supabase.from('registrations').select('*').limit(1);
    if (error) {
      console.error('Supabase connection test failed:', error);
    } else {
      console.log('Supabase connected successfully');
    }
  } catch (error) {
    console.error('Supabase connection test failed:', error);
  }
};

// Run connection test in development
if (import.meta.env.DEV) {
  testConnection();
}
