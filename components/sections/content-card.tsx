import Balancer from 'react-wrap-balancer'

import { Container } from '../fragments/container'

export function ContentCard() {
  return (
    <Container className="max-w-3xl py-0 md:py-12">
      <div className="rounded-xl bg-muted p-12">
        <div className="grid auto-rows-auto gap-6">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-0">
            <p className="col-span-2 text-muted-foreground">Intro</p>
            <p className="col-span-4">
              A detail oriented frontend software engineer. Previously founding
              team at Paytient, a new way to pay for out of pocket health care
              expenses.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-0">
            <p className="col-span-2 text-muted-foreground">Interests</p>
            <p className="col-span-4">
              Currently interested in designing and building world class
              software. I enjoy working with modern tools like Next.js, Prisma,
              React, React Native, Vercel, PlanetScale, OpenAI, TypeScript, and
              Tailwind CSS.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-6 md:gap-0">
            <p className="col-span-2 text-muted-foreground">Consulting</p>
            <p className="col-span-4">
              I am available for consulting work on a limited basis. If you are
              interested in working together, please reach out. Add current
              status pulsing dot.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
