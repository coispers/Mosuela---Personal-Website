import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Manrope, Fraunces } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Francois Mosuela • Full-Stack Developer',
  description:
    'Full-stack developer focused on clean interfaces, reliable systems, and thoughtful product experiences.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
