import { BgRay } from '@/components/fragments/bg-ray'
import { ContentCard } from '@/components/sections/content-card'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <>
      <BgRay />
      <Hero
        pretitle={'Welcome'}
        title={
          'A detail oriented frontend software engineer who cares about craft.'
        }
      />
      <ContentCard />
    </>
  )
}
