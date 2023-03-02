import { Layout } from '@/components/layout'
import { Content } from '@/components/sections'
import { useNewsletterModal } from '@/components/fragments'

export default function Home() {
  const { NewsletterModal, setShowNewsletterModal } = useNewsletterModal()
  return (
    <Layout>
      <NewsletterModal />
      <Content />
    </Layout>
  )
}
