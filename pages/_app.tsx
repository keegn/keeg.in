import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import { Provider as RWBProvider } from 'react-wrap-balancer'
import clsx from 'clsx'
import localFont from '@next/font/local'
import { Inter } from '@next/font/google'

const sfPro = localFont({
  src: '../styles/SF-Pro-Display-Medium.otf',
  variable: '--font-sf',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      <RWBProvider>
        <main className={clsx(sfPro.variable, inter.variable)}>
          <Component {...pageProps} />
        </main>
      </RWBProvider>
      <Analytics />
    </>
  )
}
