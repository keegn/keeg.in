import { Layout } from '@/components/layout'
import { HomeHero } from '@/components/sections'
import { Announcement, useRequestAccessModal } from '@/components/fragments'

export default function Home() {
  const { RequestAccessModal, setShowRequestAccessModal } =
    useRequestAccessModal()
  return (
    <Layout>
      <RequestAccessModal />
      <Announcement />
      <HomeHero />
    </Layout>
  )
}
