import { BgRay } from '@/components/fragments/bg-ray'
import { ContentCard } from '@/components/sections/content-card'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <>
      <BgRay />
      <Hero
        title={'Product designer and engineer creating internet software.'}
        includeUpdatedAt
        includeImage
      />
      <ContentCard />
    </>
  )
}
