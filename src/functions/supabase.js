import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dqdbjnrcaghgomxnujva.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZGJqbnJjYWdoZ29teG51anZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5NDMxOTgsImV4cCI6MTk4NDUxOTE5OH0.Yjdb2KyzApw8A8277JxpDqA3LSdN7Ow797zYXrIa3as';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
