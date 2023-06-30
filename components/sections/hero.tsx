import Image from 'next/image'
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
      <Container type="section" className="pb-12 pt-24">
        {includeImage && (
          <div className="mb-8 flex items-center justify-between">
            <Image
              src="/design/Keegan-Burkett.jpeg"
              alt="Hero"
              width={32}
              height={32}
              className="rounded-full"
            />
            <CommandMenu />
          </div>
        )}

        <div className="flex flex-col items-start gap-4">
          {includeImage ? (
            <p
              className={cn(
                'bg-clip-text text-left font-heading text-3xl italic text-primary-foreground  md:text-4xl'
              )}
            >
              <Balancer>{title}</Balancer>
            </p>
          ) : (
            <div className="flex w-full items-center justify-between">
              <p
                className={cn(
                  'bg-clip-text text-left font-heading text-3xl italic text-primary-foreground  md:text-4xl'
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
                Last updated at June 29, 2023 at 3:45 PM.
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
