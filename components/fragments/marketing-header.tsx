'use client'

import { useEffect, useState } from 'react'
import * as React from 'react'
import Link from 'next/link'
import { useLockBody } from '@/hooks/use-lock-body'
import { AnimatePresence, motion } from 'framer-motion'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Container } from '@/components/fragments/container'
import { NavTabs } from '@/components/fragments/nav-tabs'
import { ModeToggle } from './mode-toggle'

// function MobileNavIcon({ open }: { open: boolean }) {
//   console.log('open', open)
//   return (
//     <svg
//       aria-hidden="true"
//       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//       fill="none"
//       strokeWidth={2}
//       strokeLinecap="round"
//     >
//       <path
//         d="M0 1H14M0 7H14M0 13H14"
//         className={clsx(
//           'origin-center transition',
//           open && 'scale-90 opacity-0'
//         )}
//       />
//       <path
//         d="M2 2L12 12M12 2L2 12"
//         className={clsx(
//           'origin-center transition',
//           !open && 'scale-90 opacity-0'
//         )}
//       />
//     </svg>
//   )
// }

export function MarketingHeader({ className }: { className?: string }) {
  const [hasScrolled, setHasScrolled] = useState(false)
  //   const [mobileNavOpen, setMobileNavOpen] = useState(false)
  //   const [width, setWidth] = useState(0)
  //   const breakpoint = 1024 // Define your breakpoint here

  //   const updateDimensions = () => {
  //     setWidth(window.innerWidth)
  //   }

  const handleScroll = (event: any) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //   useEffect(() => {
  //     // If width is more tan the breakpoint, set the mobile nav to false (close it)
  //     if (width >= breakpoint) {
  //       setMobileNavOpen(false)
  //     }
  //     // Add the event listener to the window object
  //     window.addEventListener('resize', updateDimensions)

  //     // Cleanup the event listener when the component is unmounted
  //     return () => {
  //       window.removeEventListener('resize', updateDimensions)
  //     }
  //   }, [width]) // Re-run the effect when the 'width' state changes)

  return (
    <>
      <header className={cn('', hasScrolled && 'transition-all', className)}>
        <Container type="nav">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between rounded-full border border-primary bg-muted px-2 py-2 text-sm text-muted-foreground md:px-3">
            {/* LEFT NAV */}
            <Link href="/" className="text-3xl text-primary-foreground">
              ✺
            </Link>
            {/* MIDDLE NAV */}
            <div className="flex space-x-6">
              <div className="flex">
                <NavTabs />
              </div>
            </div>

            {/* RIGHT NAV */}
            <div className="flex items-center space-x-3">
              <ModeToggle />

              {/* <div
                className="cursor-pointer px-4 lg:hidden"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <MobileNavIcon open={mobileNavOpen} />
              </div> */}
            </div>
          </div>
        </Container>
      </header>

      {/* <MobileNav
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      /> */}
    </>
  )
}

interface MobileNavProps {
  children?: React.ReactNode
  mobileNavOpen: boolean
  setMobileNavOpen: (open: boolean) => void
}

export function MobileNav({
  children,
  mobileNavOpen,
  setMobileNavOpen,
}: MobileNavProps) {
  useLockBody({ enabled: mobileNavOpen })
  return (
    <AnimatePresence>
      {mobileNavOpen && (
        <motion.div
          key="nav-background"
          className="fixed z-10 h-screen w-full bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Container type="nav">
            <div className="z-9 relative grid gap-6 pt-[54px] md:pt-[72px]">
              <nav className="grid grid-flow-row auto-rows-max justify-center divide-y divide-gray-100 text-sm">
                <Link
                  href={'/'}
                  className={cn(
                    'flex w-full items-center  py-3  text-2xl font-semibold tracking-tight'
                  )}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href={'/product'}
                  className={cn(
                    'flex w-full items-center  py-3 text-2xl font-semibold tracking-tight'
                  )}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Product
                </Link>
                <Link
                  href={'/pricing'}
                  className={cn(
                    'tracking-tigh flex w-full  items-center py-3 text-2xl font-semibold'
                  )}
                  onClick={() => setMobileNavOpen(false)}
                >
                  Pricing
                </Link>
              </nav>
              {children}
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
