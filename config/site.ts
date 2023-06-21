interface Link {
  href: string
  label: string
}

interface SiteConfig {
  name: string
  description: string
  links: Link[]
}

export const siteConfig: SiteConfig = {
  name: 'Keegan Burkett | Software Engineer',
  description:
    'Personal website of Keegan Burkett, a software engineer based in the United States.',
  links: [
    { href: '/', label: 'About' },
    { href: '/stack', label: 'Stack' },
    { href: '/products', label: 'Products' },
  ],
}
