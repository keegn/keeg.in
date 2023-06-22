import { GridBackground } from '@/components/fragments/grid-background'
import { ContentCard } from '@/components/sections/content-card'
import { PageHero } from '@/components/sections/home-hero'
import { TestContent } from '@/components/sections/test-content'

export default function Home() {
  return (
    <>
      {/* <GridBackground /> */}
      <PageHero
        title={
          'A detail oriented frontend software engineer who cares about craft.'
        }
        subtitle={'Welcome'}
      />
      {/* <TestContent /> */}
      <ContentCard />
    </>
  )
}
