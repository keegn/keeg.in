import { Container } from '@/components/fragments/container'

export function ContentCard() {
  return (
    <Container type="section" className="pb-24">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-tertiary-foreground">Intro</p>
            <p>
              Hey, I&apos;m Keegan. I have a background in software engineering
              and product design. I'm currently interested in AI, fintech,
              privacy, and real estate. I was previously part of the founding
              team at Paytient, a financial technology company in the healthcare
              payments space.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <p className="text-tertiary-foreground">Availability</p>

            <p>
              I have limited availability but occasionally collaborate on
              projects. If you're looking for help with product design, frontend
              engineering, fullstack JavaScript, or team building, feel free to
              reach out.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
