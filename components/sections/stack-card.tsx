import Image from 'next/image'
import Link from 'next/link'

import { Container } from '../fragments/container'

export function StackCard() {
  return (
    <Container type="section" className="px-4 md:px-0 md:pb-12">
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
                src="/design/figma.png"
                alt="Figma logo"
                width={36}
                height={36}
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">Figma</span>
              <span className="text-secondary-foreground">
                Design tool of choice
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
                src="/design/tailwind.png"
                alt="Tailwind CSS logo"
                width={36}
                height={36}
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">Tailwind CSS</span>
              <span className="text-secondary-foreground">
                Styling framework of choice
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
                src="/design/vscode.png"
                alt="vscode logo"
                width={36}
                height={36}
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">Visual Studio Code</span>
              <span className="text-secondary-foreground">
                Code editor of choice
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
                src="/design/nextjs.png"
                alt="Next.js logo"
                width={36}
                height={36}
                className="fill-white"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">Next.js</span>
              <span className="text-secondary-foreground">
                Frontend framework
              </span>
            </div>
          </Link>
        </li>
        <li className="flex">
          <Link
            href="https://www.planetscale.com"
            target="_blank"
            className="flex w-full items-center gap-5 border-b border-zinc-100 p-5 hover:rounded-md hover:bg-zinc-100 dark:border-zinc-900 dark:hover:bg-zinc-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border-transparent bg-zinc-100 p-2 dark:bg-zinc-900">
              <Image
                src="/design/planetscale.png"
                alt="PlanetScale logo"
                width={36}
                height={36}
                className="fill-white"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">Planetscale</span>
              <span className="text-secondary-foreground">
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
                src="/design/openai-white-logomark.png"
                alt="Open AI logo"
                width={36}
                height={36}
                className="fill-white"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">OpenAI</span>
              <span className="text-secondary-foreground">LLM API</span>
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
                src="/design/openai-logomark.png"
                alt="Open AI logo"
                width={36}
                height={36}
                className="fill-white"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col items-start">
              <span className="font-bold">OpenAI</span>
              <span className="text-secondary-foreground">LLM API</span>
            </div>
          </Link>
        </li>
      </ul>
    </Container>
  )
}
