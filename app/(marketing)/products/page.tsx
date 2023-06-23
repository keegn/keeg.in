import { BgRay } from '@/components/fragments/bg-ray'
import { PageHero } from '@/components/sections/home-hero'
import { ProductCard } from '@/components/sections/product-card'

export default function Products() {
  return (
    <>
      <BgRay />
      <PageHero title={`Software & Templates`} subtitle={'Products'} />

      <ProductCard />
    </>
  )
}
