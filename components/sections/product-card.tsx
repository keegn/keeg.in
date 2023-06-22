import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Container } from '../fragments/container'

export function ProductCard() {
  return (
    <Container type="section" className="px-4 md:px-0 md:pb-12">
      <div className="rounded-xl">
        <div className="grid grid-cols-1 gap-0 gap-y-0 sm:grid-cols-12 sm:gap-x-6 sm:gap-y-8">
          <div className="col-span-full sm:col-span-6">
            <Image
              src="/test.jpg"
              alt="Next.js"
              width={500}
              height={500}
              className="w-full rounded-md object-cover sm:w-fit"
            />
          </div>
          <div className="col-span-6">
            <Badge variant={'outline'}>Template</Badge>
            <p>Brokerage</p>
            <p>Framer template</p>
          </div>
          <div className="col-span-full sm:col-span-6">
            <Image
              src="/test.jpg"
              alt="Next.js"
              width={500}
              height={500}
              className="w-full rounded-md object-cover sm:w-fit"
            />
          </div>
          <div className="col-span-6">
            <Badge variant={'outline'}>SaaS</Badge>
            <p>Brokerage</p>
            <p>Framer template</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
