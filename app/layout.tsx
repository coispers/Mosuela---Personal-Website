import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = localFont({
  src: [
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Thin.woff2', weight: '100' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-UltraLight.woff2', weight: '200' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Light.woff2', weight: '300' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2', weight: '400' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Medium.woff2', weight: '500' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.woff2', weight: '600' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Bold.woff2', weight: '700' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-Black.woff2', weight: '800' },
    { path: '../node_modules/geist/dist/fonts/geist-sans/Geist-UltraBlack.woff2', weight: '900' },
  ],
  variable: '--font-geist-sans',
})

const geistMono = localFont({
  src: [
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Thin.woff2', weight: '100' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-UltraLight.woff2', weight: '200' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Light.woff2', weight: '300' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2', weight: '400' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Medium.woff2', weight: '500' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-SemiBold.woff2', weight: '600' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Bold.woff2', weight: '700' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Black.woff2', weight: '800' },
    { path: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-UltraBlack.woff2', weight: '900' },
  ],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Francois Mosuela • Full-Stack Developer',
  description:
    'Full-stack developer focused on backend systems, clean interfaces, and thoughtful product experiences.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
