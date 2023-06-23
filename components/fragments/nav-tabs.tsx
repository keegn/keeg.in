import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function NavTabs() {
  const path = usePathname()

  return (
    <div className="flex space-x-4">
      {siteConfig.links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            path === link.href &&
              'transition-color ease-smooth cursor-pointer font-medium text-black/40 duration-150 hover:text-black',
            'transition-color ease-smooth cursor-pointer font-medium text-black/40 duration-150 hover:text-black '
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
