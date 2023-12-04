'use client';

//import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
import { insertCard } from '../utils/supabase-client'
import Button from './Button'
import Field from './Field'
import Input from './Input'
import Label from './Label'
import { createClient } from '@supabase/supabase-js';


export default function CardForm({ onAddCard }) {
  //const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    // Create an object with the form data
    const newCard = {
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      img: formData.get('img'),
      description: formData.get('description'),
    }

    // Call the insertCard function (assuming it's an async operation)
    await insertCard(newCard)

    // Call the onAddCard function if it's provided
    if (onAddCard) {
      onAddCard(newCard)
    }

    // Optionally, reset the form here
    event.target.reset()

    // Redirect to the home page (or any other page)
    //router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-emerald-800 rounded-lg mt-4">
      {/* Render Button and Field components with Label and Input */}
      <Field>
        <Label label="Title" htmlFor="title" />
        <Input id="title" name="title" />
      </Field>
      <Field>
        <Label label="Subtitle" htmlFor="subtitle" />
        <Input id="subtitle" name="subtitle" />
      </Field>
      <Field>
        <Label label="Image" htmlFor="img" />
        <Input id="img" name="img" />
      </Field>
      <Field>
        <Label label="Description" htmlFor="description" />
        <Input id="description" name="description" />
      </Field>
      <div className="mt-4 flex justify-end">
        <Button type="submit">Add Card</Button>
      </div>
    </form>
  )
}
