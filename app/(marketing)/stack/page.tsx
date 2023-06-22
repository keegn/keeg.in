import { GridBackground } from '@/components/fragments/grid-background'
import { ContentCard } from '@/components/sections/content-card'
import { PageHero } from '@/components/sections/home-hero'
import { StackCard } from '@/components/sections/stack-card'

export default function Stack() {
  return (
    <>
      {/* <GridBackground /> */}
      <PageHero title={`Tools & Products`} subtitle={'Stack'} />
      <StackCard />
    </>
  )
}
