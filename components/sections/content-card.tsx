import { Container } from '../fragments/container'

export function ContentCard() {
  return (
    <Container type="section" className="pb-24">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-3">
            <p className="text-tertiary-foreground">Intro</p>
            <p>
              Currently focused on designing and building internet companies.
              Previously founding team at Paytient, a new way to pay for out of
              pocket health care expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <p className=" text-tertiary-foreground">Availability</p>

            <p>
              I have limited availability and occasionally take on engagements.
              If you&apos;re a founder or an early stage startup looking to
              consult regarding design, frontend engineering or product strategy
              — please reach out via email.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
