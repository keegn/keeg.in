import { GridBackground } from '@/components/fragments/grid-background'
import { ContentCard } from '@/components/sections/content-card'
import { PageHero } from '@/components/sections/home-hero'

export default function Stack() {
  return (
    <>
      {/* <GridBackground /> */}
      <PageHero title={`Tools & products`} subtitle={'Stack'} />
      <ContentCard />
    </>
  )
}
