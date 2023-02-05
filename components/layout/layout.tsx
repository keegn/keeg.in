import { ReactNode } from 'react'
import useScroll from '@/lib/hooks/use-scroll'
import Meta from './meta'

import { Navigation } from '@/components/layout'
import { GridTop, GridBottom } from '@/components/icons'
import { useRequestAccessModal } from '@/components/fragments/request-access-modal'

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
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()
  const scrolled = useScroll(50)

  return (
    <>
      <Meta {...meta} />
      {/* <SignInModal />
      <RequestAccessModal /> */}

      <main className="relative flex min-h-screen w-full flex-col items-start justify-start sm:items-center sm:justify-center">
        {children}
      </main>

      {/* Footer */}
      <footer></footer>
    </>
  )
}
