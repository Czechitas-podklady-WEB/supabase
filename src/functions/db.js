import { getSupabase } from './supabase.js';

export const getShopingItems = (userId) => {
  const supabase = getSupabase();

  return supabase.from('shoping_item').select('*').eq('user_id', userId);
};

export const addShoppingItem = (product, amount, unit, userId) => {
  const supabase = getSupabase();
  return supabase.from('shoping_item').insert({
    product: product,
    amount: amount,
    unit: unit,
    user_id: userId,
  });
};
