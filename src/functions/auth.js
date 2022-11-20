import { getSupabase } from './supabase';

export const signUp = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signUp({ email, password });
};

export const signIn = (email, password) => {
  const supabase = getSupabase();
  return supabase.auth.signInWithPassword({ email, password });
};

export const signOut = () => {
  const supabase = getSupabase();
  return supabase.auth.signOut();
};

export const getSession = () => {
  const supabase = getSupabase();
  return supabase.auth.getSession();
};
