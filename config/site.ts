interface Link {
  href: string
  label: string
}

interface SiteConfig {
  name: string
  description: string
  navLinks: Link[]
}

export const siteConfig: SiteConfig = {
  name: 'Keegan Burkett | Software Engineer & Product Designer',
  description:
    'Personal website of Keegan Burkett, a software engineer and product designer based in the United States.',
  navLinks: [
    { href: '/', label: 'About' },
    { href: '/stack', label: 'Stack' },
  ],
}
