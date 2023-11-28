import { redirect } from 'next/navigation'
import { insertCard } from '../utils/supabase-client'
import Button from './Button'
import Field from './Field'
import Input from './Input'
import Label from './Label'
async function createCard(formData) {
  'use server'
  const title = formData.get('title')
  const subtitle = formData.get('subtitle')
  const img = formData.get('img')
  const description = formData.get('description')
  insertCard(title, subtitle, img, description)
  redirect('/')
  // Extract fields from formData and call insertCard
}

export default function CardForm() {
  // Render form with action attribute set to createCard
  return (
    <form action={createCard} className="p-4 bg-emerald-800 rounded-lg mt-4">
      {/* Render Button and Field components with Label and Input */}
      <Field>
        <Label label="title" /* title label props */ />
        <Input id="title" name="title" /* title input props */ />
      </Field>
      <Field>
        <Label label="subtitle" /* title label props */ />
        <Input id="subtitle" name="subtitle" /* title input props */ />
      </Field>
      <Field>
        <Label label="image" /* image label props */ />
        <Input id="image" name="image" /* image input props */ />
      </Field>
      <Field>
        <Label label="description" /* description label props */ />
        <Input id="description" name="description" /* description input props */ />
      </Field>
      {/* Repeat for subtitle, img, and description */}
      <div className="mt-4 flex justify-end">
        <Button type="submit">Add Card</Button>
      </div>
    </form>
  )
}
