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
          <p className="mx-auto max-w-2xl text-center text-xl md:text-4xl">
            Old Friends is an engineering studio. We build custom websites for
            teams who value craft.
          </p>
        </div>
      </Container>
    </>
  )
}
