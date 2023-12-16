import Image from 'next/image'
import Link from 'next/link'
import githubmarkwhite from '@/public/design/github-mark-white.png'
import githubmark from '@/public/design/github-mark.png'
import layerslogowhite from '@/public/design/layers-logo-white.png'
import layerslogo from '@/public/design/layers-logo.png'
import xlogoblack from '@/public/design/x-logo-black.png'
import xlogowhite from '@/public/design/x-logo-white.png'

import { Container } from '../fragments/container'

export function SocialLinks() {
  return (
    <Container type="section" className="pb-24">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-3">
            <p className="text-tertiary-foreground">Links</p>
            <ul className="flex gap-x-4">
              <li className="flex dark:hidden">
                <Link
                  href="https://github.com/keegn"
                  target="_blank"
                  className="flex w-full items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
                    <Image
                      src={githubmark}
                      alt="Github logo"
                      width={36}
                      height={36}
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </li>
              <li className="hidden dark:flex">
                <Link
                  href="https://github.com/keegn"
                  target="_blank"
                  className="flex w-full items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
                    <Image
                      src={githubmarkwhite}
                      alt="Github logo"
                      width={36}
                      height={36}
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </li>
              <li className="flex dark:hidden">
                <Link
                  href="https://layers.to/keegan"
                  target="_blank"
                  className="flex w-full items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
                    <Image
                      src={layerslogo}
                      alt="Layers.to logo"
                      width={36}
                      height={36}
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </li>
              <li className="hidden dark:flex">
                <Link
                  href="https://layers.to/keegan"
                  target="_blank"
                  className="flex w-full items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
                    <Image
                      src={layerslogowhite}
                      alt="Layers.to logo"
                      width={36}
                      height={36}
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </li>
              <li className="hidden dark:flex">
                <Link
                  href="https://twitter.com/keegnn"
                  target="_blank"
                  className="flex w-full items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-3 dark:bg-zinc-900">
                    <Image
                      src={xlogowhite}
                      alt="X logo"
                      width={36}
                      height={36}
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </li>
              <li className="flex dark:hidden">
                <Link
                  href="https://twitter.com/keegnn"
                  target="_blank"
                  className="flex w-full items-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-3 dark:bg-zinc-900">
                    <Image
                      src={xlogoblack}
                      alt="X logo"
                      width={36}
                      height={36}
                      placeholder="blur"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
