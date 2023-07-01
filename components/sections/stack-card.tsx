import Image from 'next/image'
import Link from 'next/link'
import figmaLogo from '@/public/design/figma.png'
import nextLogo from '@/public/design/nextjs.png'
import openAIDark from '@/public/design/openai-logomark.png'
import openAILight from '@/public/design/openai-white-logomark.png'
import planetscale from '@/public/design/planetscale.png'
import tailwindLogo from '@/public/design/tailwind.png'
import vscodeLogo from '@/public/design/vscode.png'
import prisma from '@/public/stack/stack-2.webp'

import { Container } from '../fragments/container'

export function StackCard() {
  return (
    <Container type="section" className="pb-24">
      <ul className="flex flex-col">
        <li className="flex">
          <Link
            href="https://www.figma.com"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={figmaLogo}
                alt="Figma logo"
                width={36}
                height={36}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Figma</span>
              <span className="text-sm text-tertiary-foreground">
                Design tool
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://www.tailwindcss.com"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={tailwindLogo}
                alt="Tailwind CSS logo"
                width={36}
                height={36}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Tailwind CSS</span>
              <span className="text-sm text-tertiary-foreground">
                Styling framework
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={vscodeLogo}
                alt="vscode logo"
                width={36}
                height={36}
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Visual Studio Code</span>
              <span className="text-sm text-tertiary-foreground">
                Code editor
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://www.nextjs.org"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={nextLogo}
                alt="Next.js logo"
                width={36}
                height={36}
                className="fill-white"
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Next.js</span>
              <span className="text-sm text-tertiary-foreground">
                Full-stack javascript framework
              </span>
            </div>
          </Link>
        </li>{' '}
        <li className="flex">
          <Link
            href="https://www.prisma.io"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={prisma}
                alt="Prisma logo"
                width={36}
                height={36}
                className="rounded-full fill-white"
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Prisma</span>
              <span className="text-sm text-tertiary-foreground">
                Database ORM
              </span>
            </div>
          </Link>
        </li>{' '}
        <li className="flex">
          <Link
            href="https://www.planetscale.com"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={planetscale}
                alt="PlanetScale logo"
                width={36}
                height={36}
                className="fill-white"
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>Planetscale</span>
              <span className="text-sm text-tertiary-foreground">
                Serverless MySQL database
              </span>
            </div>
          </Link>
        </li>{' '}
        <li className="hidden dark:flex">
          <Link
            href="https://www.openai.com"
            target="_blank"
            className="b flex w-full items-center gap-5 p-5 hover:rounded-md hover:bg-zinc-100  dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md  bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={openAILight}
                alt="Open AI logo"
                width={36}
                height={36}
                className="fill-white"
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>OpenAI</span>
              <span className="text-sm text-tertiary-foreground">LLM API</span>
            </div>
          </Link>
        </li>
        <li className="flex dark:hidden">
          <Link
            href="https://www.openai.com"
            target="_blank"
            className="flex w-full items-center gap-5  p-5 hover:rounded-md  hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md  bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src={openAIDark}
                alt="Open AI logo"
                width={36}
                height={36}
                className="fill-white"
                placeholder="blur"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span>OpenAI</span>
              <span className="text-sm text-tertiary-foreground">LLM API</span>
            </div>
          </Link>
        </li>
      </ul>
    </Container>
  )
}
