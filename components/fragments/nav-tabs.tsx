import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export function NavTabs() {
  const path = usePathname()
  console.log(path)
  return (
    <div className="flex items-end justify-center p-2">
      {siteConfig.navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            path == link.href
              ? 'transition-color ease-smooth cursor-pointer px-5 py-1 text-sm text-primary-foreground duration-150'
              : 'transition-color ease-smooth cursor-pointer px-5 py-1 text-sm text-tertiary-foreground duration-150  '
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
