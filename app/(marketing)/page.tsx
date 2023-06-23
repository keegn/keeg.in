import { BgRay } from '@/components/fragments/bg-ray'
import { ContentCard } from '@/components/sections/content-card'
import { PageHero } from '@/components/sections/home-hero'

export default function Home() {
  return (
    <>
      <BgRay />
      <PageHero
        title={
          'A detail oriented frontend software engineer who cares about craft.'
        }
        subtitle={'Welcome'}
      />
      <ContentCard />
    </>
  )
}
