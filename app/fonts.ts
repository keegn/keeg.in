import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const fontHeading = localFont({
  src: [
    {
      path: '../assets/fonts/editorial/PPEditorialNew-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/editorial/PPEditorialNew-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
})

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/mori/PPMori-SemiBold.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/mori/PPMori-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})
