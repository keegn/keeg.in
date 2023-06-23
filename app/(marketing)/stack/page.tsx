import { Divider } from '@/components/fragments/divider'
import { PageHero } from '@/components/sections/home-hero'
import { StackCard } from '@/components/sections/stack-card'

export default function Stack() {
  return (
    <>
      {/* <GridBackground /> */}
      <PageHero title={`Tools & Products`} subtitle={'Stack'} />
      <Divider />
      <StackCard />
    </>
  )
}
