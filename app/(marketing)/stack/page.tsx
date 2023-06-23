import { BgRay } from '@/components/fragments/bg-ray'
import { PageHero } from '@/components/sections/home-hero'
import { StackCard } from '@/components/sections/stack-card'

export default function Stack() {
  return (
    <>
      <BgRay />
      <PageHero title={`Tools & Products`} subtitle={'Stack'} />

      <StackCard />
    </>
  )
}
