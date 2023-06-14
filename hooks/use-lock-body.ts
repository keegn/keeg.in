import * as React from 'react'

// @see https://usehooks.com/useLockBodyScroll.
interface Props {
  enabled: boolean
}
export function useLockBody({ enabled }: Props) {
  console.log('useLockBody enabled', enabled)
  React.useLayoutEffect((): (() => void) => {
    if (!enabled) return () => {}
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflow
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = originalStyle)
  }, [enabled])
}
