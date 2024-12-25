export default async function sitemap() {
  const routes = ['', '/', '/tools'].map((route) => ({
    url: `https://keeg.in${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
