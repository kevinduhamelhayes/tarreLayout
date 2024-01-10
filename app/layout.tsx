import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({subsets: ['latin-ext']})

export const metadata: Metadata = {
  title: 'Tarre',
  description: 'Generated for kevin duahmel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={urbanist.className}>{children}</body>
    </html>
  )
}
