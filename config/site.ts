interface SiteConfig {
  name: string
  description: string
  links: {
    home: string
    stack: string
    products: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Keegan Burkett | Software Engineer',
  description:
    'Personal website of Keegan Burkett, a software engineer based in the United States.',
  links: {
    home: '/',
    stack: '/stack',
    products: '/products',
  },
}
