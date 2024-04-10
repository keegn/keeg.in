import { Container } from '@/components/fragments/container'

export function ContentCard() {
  return (
    <Container type="section" className="pb-24">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-3">
            <p className="text-tertiary-foreground">Intro</p>
            <p>
              Hey, I&apos;m Keegan. I have a background in software engineering
              and product design. Currently interested in real estate, privacy,
              and AI. Previously part of the founding team at Paytient, an
              innovator in the healthcare payments space.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <p className=" text-tertiary-foreground">Availability</p>

            <p>
              I have limited availability and occasionally collaborate on
              projects. If you&apos;re a founder or an early-stage startup in
              need of expertise in product design, frontend engineering,
              fullstack javascript, or building teams — please feel free to
              reach out.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
