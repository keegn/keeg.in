'use client'

import { newsreader } from '@/app/fonts'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { Container } from '@/components/fragments/container'

export function Hero({
  title,
  includeUpdatedAt,
}: {
  title: string
  includeUpdatedAt?: boolean
}) {
  return (
    <>
      <Container type="section" className="py-12 md:py-12">
        <div className="flex flex-col items-start gap-4">
          <p
            className={cn(
              'bg-clip-text text-left text-3xl italic text-primary-foreground  md:text-4xl',
              newsreader.className
            )}
          >
            <Balancer>{title}</Balancer>
          </p>
          {includeUpdatedAt && (
            <div className="flex flex-col space-y-2">
              <small className="text-xs leading-3 tracking-tight text-secondary-foreground">
                Last updated at June 28, 2023 at 5:22 PM.
              </small>
              <small className="text-xs leading-3 tracking-tight text-secondary-foreground">
                © 2023 Keegan Burkett.
              </small>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
