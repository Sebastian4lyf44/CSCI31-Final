import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient(
    'https://rgssivwiganotufotsrf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnc3NpdndpZ2Fub3R1Zm90c3JmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTkyMjIzNSwiZXhwIjoyMDE1NDk4MjM1fQ.OTPbKY8PQSvQ2dYlqRoj_UMhFmb4ygnl6ClYnpvA1MI',
  )
  return supabase
}
// { title, Subtitle, description, img }
export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('Cards').insert(card)
  console.log('error', error)
}

export async function findCards() {
  const supabase = getClient()
  const { data: Cards, error } = await supabase.from('Cards').select('*')
  return Cards
}
