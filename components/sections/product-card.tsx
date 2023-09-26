import Image from 'next/image'
import Link from 'next/link'
import stealthB2BSaaS from '@/public/design/cline.png'
import framerLogo from '@/public/design/framer.webp'

import { Container } from '../fragments/container'

export function ProductCard() {
  return (
    <Container type="section" className="pb-24">
      <ul className="flex flex-col">
        <li className=" flex">
          {/* Icon */}
          <Link
            href="https://cline.ai"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5  hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={stealthB2BSaaS}
                alt="Stealth B2B SaaS logo"
                width={36}
                height={36}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Cline</span>
              <span className="text-sm text-tertiary-foreground">
                B2B SaaS{' '}
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <div className="flex w-full items-center gap-5  p-5 hover:cursor-not-allowed hover:rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900">
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={framerLogo}
                alt="Framer logo"
                width={36}
                height={36}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Framer Template</span>
              <span className="text-sm text-tertiary-foreground ">Soon</span>
            </div>
          </div>

          {/* </Link> */}
        </li>
      </ul>
    </Container>
  )
}
