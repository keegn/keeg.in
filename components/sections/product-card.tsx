import Image from 'next/image'

import { Container } from '../fragments/container'

export function ProductCard() {
  return (
    <Container type="section" className="px-4 md:px-0 md:pb-12">
      <div className="rounded-xl">
        <div className="mx-auto grid max-w-xs grid-cols-1 justify-items-center gap-8 sm:max-w-none sm:grid-cols-2">
          <div>
            <Image
              src="/frame.png"
              alt="Next.js"
              width={500}
              height={500}
              className="w-full rounded-md object-cover sm:w-fit"
            />

            <p className="pt-2 text-secondary-foreground">Framer Template</p>
            <p>Brokerage</p>
            <p>
              <p>Coming 2023</p>
            </p>
          </div>
          <div>
            <div>
              <Image
                src="/test.jpg"
                alt="Next.js"
                width={500}
                height={500}
                className="w-full rounded-md object-cover sm:w-fit"
              />
            </div>

            <p className="pt-2 text-secondary-foreground">B2B SaaS</p>
            <p>Stealth</p>
            <p>Coming 2023</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
