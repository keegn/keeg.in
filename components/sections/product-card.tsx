import Image from 'next/image'

import { Container } from '../fragments/container'

export function ProductCard() {
  return (
    <Container className="max-w-3xl px-4 md:px-0 md:py-12">
      <div className="rounded-xl bg-muted p-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
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
            <h3>Brokerage</h3>
          </div>
        </div>
      </div>
    </Container>
  )
}
