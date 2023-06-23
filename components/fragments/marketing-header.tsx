'use client'

import { useEffect, useState } from 'react'
import * as React from 'react'
import Link from 'next/link'
import { useLockBody } from '@/hooks/use-lock-body'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Container } from '@/components/fragments/container'
import { NavTabs } from '@/components/fragments/nav-tabs'

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
        <div className="mx-auto flex justify-between rounded-full border border-zinc-400/20 bg-white/70 shadow-header-shadow backdrop-blur-lg dark:border-zinc-200/10 dark:bg-zinc-500/20">
          <NavTabs />
        </div>
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
