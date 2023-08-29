import '@/styles/globals.css'

import type { Metadata } from 'next'
// import Script from 'next/script'
import { fontHeading, fontSans } from '@/app/fonts'
import { Analytics } from '@vercel/analytics/react'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/fragments/theme-provider'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

export const metadata: Metadata = {
  metadataBase: new URL('https://keeg.in'),
  title: {
    default: 'Keegan Burkett',
    template: '%s | Keegan Burkett',
  },
  description: 'Developer, designer, cyclist.',
  openGraph: {
    title: 'Keegan Burkett',
    description: 'Developer, designer, cyclist.',
    url: 'https://keeg.in',
    siteName: 'Keegan',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Keegan Burkett',
    card: 'summary_large_image',
  },
  verification: {},
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontHeading.variable,
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
