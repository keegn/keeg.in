import { BgRay } from '@/components/fragments/bg-ray'
import { Hero } from '@/components/sections/hero'
import { ProductCard } from '@/components/sections/product-card'

export default function Products() {
  return (
    <>
      <BgRay />
      <Hero title={`Software & Templates`} />
      <ProductCard />
    </>
  )
}
