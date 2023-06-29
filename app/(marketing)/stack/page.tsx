import { BgRay } from '@/components/fragments/bg-ray'
import { Hero } from '@/components/sections/hero'
import { StackCard } from '@/components/sections/stack-card'

export default function Stack() {
  return (
    <>
      <BgRay />
      <Hero title={`Tools & Products`} />
      <StackCard />
    </>
  )
}
