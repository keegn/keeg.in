import Image from 'next/image'
import Link from 'next/link'
import githubmarkwhite from '@/public/design/github-mark-white.png'
import githubmark from '@/public/design/github-mark.png'
import layerslogowhite from '@/public/design/layers-logo-white.png'
import layerslogo from '@/public/design/layers-logo.png'
import xlogoblack from '@/public/design/x-logo-black.png'
import xlogowhite from '@/public/design/x-logo-white.png'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Container } from '../fragments/container'

export function SocialLinks() {
  return (
    <Container type="section" className="pb-32 pt-3 md:pb-24">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-3">
            <TooltipProvider>
              <ul className="flex gap-x-4">
                <li className="flex dark:hidden">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://github.com/keegn"
                        target="_blank"
                        className="flex w-full items-center"
                      >
                        <div className="flex items-center justify-center overflow-hidden rounded-md border-transparent">
                          <Image
                            src={githubmark}
                            alt="Github logo"
                            width={20}
                            height={20}
                            placeholder="blur"
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Github</TooltipContent>
                  </Tooltip>
                </li>
                <li className="hidden dark:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://github.com/keegn"
                        target="_blank"
                        className="flex w-full items-center"
                      >
                        <div className="flex items-center justify-center overflow-hidden rounded-md border-transparent">
                          <Image
                            src={githubmarkwhite}
                            alt="Github logo"
                            width={20}
                            height={20}
                            placeholder="blur"
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Github</TooltipContent>
                  </Tooltip>
                </li>
                <li className="flex dark:hidden">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://layers.to/keegan"
                        target="_blank"
                        className="flex w-full items-center"
                      >
                        <div className="flex  items-center justify-center overflow-hidden rounded-md border-transparent">
                          <Image
                            src={layerslogo}
                            alt="Layers.to logo"
                            width={20}
                            height={20}
                            placeholder="blur"
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Layers</TooltipContent>
                  </Tooltip>
                </li>
                <li className="hidden dark:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://layers.to/keegan"
                        target="_blank"
                        className="flex w-full items-center"
                      >
                        <div className="flex  items-center justify-center overflow-hidden rounded-md border-transparent ">
                          <Image
                            src={layerslogowhite}
                            alt="Layers.to logo"
                            width={20}
                            height={20}
                            placeholder="blur"
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Layers</TooltipContent>
                  </Tooltip>
                </li>
                <li className="hidden dark:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://twitter.com/keegnn"
                        target="_blank"
                        className="flex w-full items-center"
                      >
                        <div className="flex  items-center justify-center overflow-hidden rounded-md border-transparent ">
                          <Image
                            src={xlogowhite}
                            alt="X logo"
                            width={16}
                            height={16}
                            placeholder="blur"
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>X (Twitter)</TooltipContent>
                  </Tooltip>
                </li>
                <li className="flex dark:hidden">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href="https://twitter.com/keegnn"
                        target="_blank"
                        className="flex w-full items-center"
                      >
                        <div className="flex  items-center justify-center overflow-hidden rounded-md border-transparent">
                          <Image
                            src={xlogoblack}
                            alt="X logo"
                            width={16}
                            height={16}
                            placeholder="blur"
                          />
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>X (Twitter)</TooltipContent>
                  </Tooltip>
                </li>
              </ul>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </Container>
  )
}
