import { ReactNode } from 'react'
import useScroll from '@/lib/hooks/use-scroll'
import Meta from './meta'
import { useNewsletterModal } from '@/components/fragments/newsletter-modal'

export function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string
    description?: string
    image?: string
  }
  children: ReactNode
}) {
  const { NewsletterModal, setShowNewsletterModal } = useNewsletterModal()
  const scrolled = useScroll(50)

  return (
    <>
      <Meta {...meta} />

      {/* <NewsletterModal /> */}

      <main className="relative isolate flex min-h-screen w-full flex-col items-start justify-start overflow-hidden bg-black sm:items-center sm:justify-center">
        {children}
      </main>

      <footer />
    </>
  )
}
