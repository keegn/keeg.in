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
      <SignInModal />
      <RequestAccessModal />
      {/* Background gradient */}
      {/* <div className="fixed  min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
      {/* Navbar */}
      <Navigation />
      {/* Main content - remove min-h-screen when we get product shots */}
      <main className="flex min-h-screen w-full flex-col items-center ">
        {children}
      </main>
      {/* Footer */}
      <footer className="bottom-0 w-full border-t border-gray-200 bg-white p-4 py-5 text-center">
        <p className="text-gray-500">
          A free template by{' '}
          <a
            className="font-medium text-gray-800 underline transition-colors"
            href="https://twitter.com/keegnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Keegan Burkett
          </a>
        </p>
      </footer>
    </>
  )
}
