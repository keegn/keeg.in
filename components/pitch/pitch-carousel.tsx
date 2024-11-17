'use client'

import { useEffect, useRef, useState } from 'react'

import { SectionBook } from '@/components/pitch/section-book'
import { SectionNext } from '@/components/pitch/section-next'
import { SectionProblem } from '@/components/pitch/section-problem'
import { SectionSolution } from '@/components/pitch/section-solution'
import { SectionStart } from '@/components/pitch/section-start'
import { SectionSubscription } from '@/components/pitch/section-subscription'
import { SectionTeam } from '@/components/pitch/section-team'
import { SectionTraction } from '@/components/pitch/section-traction'
import { SectionVision } from '@/components/pitch/section-vision'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './carousel'
import { CarouselToolbar } from './carousel-toolbar'

export function PitchCarusel() {
  // const [views, setViews] = useState(0)
  // const called = useRef(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // useEffect(() => {
  //   async function fetchViewsCount() {
  //     try {
  //       const data = await setViewCount('pitch')
  //       setViews(data)
  //     } catch {}
  //   }

  //   if (!called.current) {
  //     fetchViewsCount()
  //     called.current = true
  //   }
  // }, [called.current])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel className="relative min-h-full w-full" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionProblem />
        </CarouselItem>
        <CarouselItem>
          <SectionSolution />
        </CarouselItem>
        <CarouselItem>
          <SectionTraction />
        </CarouselItem>
        <CarouselItem>
          <SectionTeam />
        </CarouselItem>
        <CarouselItem>
          <SectionSubscription />
        </CarouselItem>
        <CarouselItem>
          <SectionVision />
        </CarouselItem>
        <CarouselItem>
          <SectionNext />
        </CarouselItem>
        <CarouselItem>
          <SectionBook />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar />
    </Carousel>
  )
}
