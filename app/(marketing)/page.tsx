import { ContentCard } from '@/components/sections/content-card'
import { Hero } from '@/components/sections/hero'

export default function Home() {
  return (
    <>
      <Hero
        title={'Product engineer creating internet software.'}
        includeUpdatedAt
        includeImage
      />
      <ContentCard />
    </>
  )
}
