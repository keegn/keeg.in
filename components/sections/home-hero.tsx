'use client'

import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/fragments/container'
import { Badge } from '@/components/ui/badge'

export function PageHero({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <>
      <Container type="section" className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Badge variant={'outline'}>{subtitle}</Badge>
          <p className="mx-auto max-w-2xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-xl text-transparent   md:text-4xl">
            <Balancer>{title}</Balancer>
          </p>
        </div>
      </Container>
    </>
  )
}
