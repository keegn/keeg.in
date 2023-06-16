'use client'

import Balancer from 'react-wrap-balancer'

import { Container } from '@/components/fragments/container'
import { Badge } from '@/components/ui/badge'

export function HomeHero() {
  return (
    <>
      <Container type="section" className="py-12">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Badge variant={'outline'}>Welcome</Badge>
          <p className="mx-auto max-w-2xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-center text-xl text-transparent   md:text-4xl">
            <Balancer>
              A detail oriented frontend software engineer who cares about
              craft.
            </Balancer>
          </p>
        </div>
      </Container>
    </>
  )
}
