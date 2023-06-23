import { Divider } from '@/components/fragments/divider'
import { PageHero } from '@/components/sections/home-hero'
import { ProductCard } from '@/components/sections/product-card'

export default function Products() {
  return (
    <>
      {/* <GridBackground /> */}
      <PageHero title={`Software & Templates`} subtitle={'Products'} />
      <Divider />
      <ProductCard />
    </>
  )
}
