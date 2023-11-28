import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://rgssivwiganotufotsrf.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}
// { title, Subtitle, description, img }
export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('cards').insert(card)
  console.log('error', error)
}

export async function findCards() {
  const supabase = getClient()
  const { data: Cards, error } = await supabase.from('Cards').select('*')
  return Cards
}
