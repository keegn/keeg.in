import Image from 'next/image'

// import Link from 'next/link'

import { Container } from '../fragments/container'

export function ProductCard() {
  return (
    <Container type="section" className="pb-24">
      <ul className="flex flex-col">
        <li className=" flex">
          <div className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:cursor-not-allowed hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src="/design/framer.webp"
                alt="Framer logo"
                width={36}
                height={36}
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Framer Template</span>
              <span className="text-sm text-tertiary-foreground ">
                Summer 2023
              </span>
            </div>
          </div>
          {/* </Link> */}
        </li>
        <li className="flex">
          <div className="flex w-full items-center gap-5  p-5 hover:cursor-not-allowed hover:rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src="/design/b2bsaas.png"
                alt="Figma logo"
                width={36}
                height={36}
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>B2B SaaS</span>
              <span className="text-sm text-tertiary-foreground">
                Fall 2023
              </span>
            </div>
          </div>
          {/* </Link> */}
        </li>
      </ul>
    </Container>
  )
}
