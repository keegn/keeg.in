import { Hero } from '@/components/sections/hero'
import { StackCard } from '@/components/sections/stack-card'
import { StackIntro } from '@/components/sections/stack-intro'

export default function Stack() {
  return (
    <>
      <Hero title={`Tools`} includeImage />
      <StackIntro />
      <StackCard />
    </>
  )
}
