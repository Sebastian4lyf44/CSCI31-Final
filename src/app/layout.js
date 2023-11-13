import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interacitve',
  description: 'A website that takes user input',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-stone-950 to-red-900`}>{children}</body>
    </html>
  )
}
