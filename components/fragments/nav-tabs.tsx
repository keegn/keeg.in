import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function NavTabs() {
  const path = usePathname()

  return (
    <div className="flex items-end justify-center p-2">
      {siteConfig.navLinks.map((link) => (
        <Fragment key={link.href}>
          {link.href === '/products' ? (
            <span className="px-5 py-1 font-sans text-sm font-medium text-tertiary-foreground hover:cursor-not-allowed">
              {link.label}
            </span>
          ) : (
            <Link
              href={link.href}
              className={cn(
                path == link.href
                  ? 'transition-color ease-smooth cursor-pointer px-5 py-1 text-sm text-primary-foreground duration-150'
                  : 'transition-color ease-smooth cursor-pointer px-5 py-1 text-sm text-tertiary-foreground duration-150  ',
                'font-sans font-medium'
              )}
            >
              {link.label}
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  )
}
