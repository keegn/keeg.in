'use client'

import { useEffect, useState } from 'react'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { NavTabs } from '@/components/fragments/nav-tabs'

export function NavIsland({ className }: { className?: string }) {
  const [hasScrolled, setHasScrolled] = useState(false)

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

  return (
    <>
      <header className={cn('', hasScrolled && 'transition-all', className)}>
        <div className="mx-auto flex justify-between rounded-full border border-zinc-400/20 bg-white/70 shadow-header-shadow backdrop-blur-lg dark:border-zinc-200/10 dark:bg-zinc-500/20">
          <NavTabs />
        </div>
      </header>
    </>
  )
}
