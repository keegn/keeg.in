import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import useScroll from '@/lib/hooks/use-scroll'
import Meta from './meta'
import { useSignInModal } from '@/components/fragments'
import { Navigation } from '@/components/layout'
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
  const { data: session, status } = useSession()
  const { SignInModal, setShowSignInModal } = useSignInModal()
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()
  const scrolled = useScroll(50)

  return (
    <>
      <Meta {...meta} />
      {/* <SignInModal />
      <RequestAccessModal /> */}
      {/* Navbar */}
      {/* <Navigation /> */}
      {/* Main content - remove min-h-screen when we get product shots */}
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        {children}
      </main>
      {/* Footer */}
      <footer></footer>
    </>
  )
}
