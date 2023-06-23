import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function NavTabs() {
  const path = usePathname()

  return (
    <div className="flex items-end justify-center p-2">
      {siteConfig.links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            path === link.href &&
              'transition-color ease-smooth cursor-pointer font-medium duration-150',
            ' transition-color ease-smooth cursor-pointer px-5 py-1 font-medium text-secondary-foreground duration-150  '
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
