import Image from 'next/image'
import profilePic from '@/public/design/Keegan-Burkett.jpeg'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { CommandMenu } from '@/components/fragments/command-menu'
import { Container } from '@/components/fragments/container'

export function Hero({
  title,
  includeUpdatedAt,
  includeImage,
}: {
  title: string
  includeUpdatedAt?: boolean
  includeImage?: boolean
}) {
  return (
    <>
      <Container type="section" className="pb-12 pt-8 sm:pt-12">
        {includeImage && (
          <div className="mb-8 flex items-center justify-between">
            <Image
              src={profilePic}
              alt="Keegn Burkett profile picture"
              width={32}
              height={32}
              className="rounded-full"
              placeholder="blur"
            />
            <CommandMenu />
          </div>
        )}

        <div className="flex flex-col items-start gap-4">
          {includeImage ? (
            <p
              className={cn(
                'bg-clip-text text-left font-heading text-xl italic text-primary-foreground'
              )}
            >
              <Balancer>{title}</Balancer>
            </p>
          ) : (
            <div className="flex w-full items-center justify-between">
              <p
                className={cn(
                  'bg-clip-text text-left font-heading text-2xl italic text-primary-foreground'
                )}
              >
                <Balancer>{title}</Balancer>
              </p>
              <CommandMenu />
            </div>
          )}

          {includeUpdatedAt && (
            <div className="flex flex-col space-y-2">
              <small className="text-xs leading-3 tracking-tight text-tertiary-foreground">
                Last updated at Oct 21, 2023 at 3:08 PM.
              </small>
              <small className="text-xs leading-3 tracking-tight text-tertiary-foreground">
                © 2023 Keegan Burkett.
              </small>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
