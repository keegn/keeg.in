import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

let tabs = [
  { id: 'about', label: 'About', href: '/' },
  { id: 'stack', label: 'Stack', href: '/stack' },
  { id: 'products', label: 'Products', href: '/products' },
]

export function NavTabs() {
  const path = usePathname()
  let [activeTab, setActiveTab] = useState(path)

  return (
    <div className="flex space-x-4">
      {siteConfig.links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            path === link.href && 'text-primary-foreground',
            'hover:text-primary-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
