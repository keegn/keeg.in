import { FADE_IN_ANIMATION_SETTINGS } from '@/lib/constants'
import { AnimatePresence, motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import useScroll from '@/lib/hooks/use-scroll'
import { useSignInModal, UserDropdown, Container } from '@/components/fragments'
import { useRequestAccessModal } from '@/components/fragments/request-access-modal'

export function Navigation() {
  const { data: session, status } = useSession()
  const { SignInModal, setShowSignInModal } = useSignInModal()
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()
  const scrolled = useScroll(50)
  return (
    <>
      <SignInModal />
      <RequestAccessModal />
      <nav
        className={`fixed top-0 w-full ${
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
            : 'bg-white/0'
        } z-30 transition-all`}
      >
        <Container navigation className="flex items-center justify-between">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Logo image of a chat bubble"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Keeg.in</p>
          </Link>
          <div className="space-x-2">
            <AnimatePresence>
              {!session && status !== 'loading' ? (
                <motion.button
                  //   className=" rounded-full p-1.5 px-4 font-default text-sm text-gray-600 hover:bg-gray-100 hover:text-black"
                  className="inline-flex h-8 w-auto flex-none touch-none select-none items-center justify-center rounded-md border border-transparent bg-gray-200 bg-opacity-50 px-3.5 text-[13px] font-semibold leading-none text-black hover:bg-opacity-50 hover:bg-opacity-80 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-blue-600"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Log In
                </motion.button>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
            <AnimatePresence>
              <motion.button
                // className="rounded-full border border-black bg-black p-1.5 px-4 font-default text-sm text-white transition-all hover:bg-white hover:text-black"
                className="inline-flex h-8 w-auto flex-none touch-none select-none items-center justify-center rounded-md border border-transparent bg-black px-3.5 text-[13px] font-semibold leading-none text-white hover:bg-opacity-80 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-blue-600"
                onClick={() => setShowRequestAccessModal(true)}
                {...FADE_IN_ANIMATION_SETTINGS}
              >
                Early access
              </motion.button>
            </AnimatePresence>
          </div>
        </Container>
      </nav>
    </>
  )
}
