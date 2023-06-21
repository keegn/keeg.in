'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'

import { Icons } from '@/components/fragments/icons'

type Theme = 'light' | 'dark' | 'system'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const themes = ['light', 'dark', 'system']
  const icons: Record<Theme, JSX.Element> = {
    light: <Icons.sun className="mr-2 h-4 w-4" strokeWidth={1} />,
    dark: <Icons.moon className="mr-2 h-4 w-4" strokeWidth={1} />,
    system: <Icons.laptop className="mr-2 h-4 w-4" strokeWidth={1} />,
  }

  const handleClick = () => {
    const currentIndex = theme ? themes.indexOf(theme) : 0
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  return (
    <div
      onClick={handleClick}
      className="flex cursor-pointer select-none items-center space-x-2 rounded-full bg-secondary px-3 py-2"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="text-xs">{theme}</span>
      {theme && icons[theme as Theme]}
    </div>
  )
}
