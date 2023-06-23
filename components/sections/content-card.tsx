import { Container } from '../fragments/container'

export function ContentCard() {
  return (
    <Container type="section" className="px-4 md:px-0 md:pb-12">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-16">
          <div className="grid grid-cols-1 gap-2">
            <p className="col-span-2 text-muted-foreground">Intro</p>
            <p className="col-span-4">
              A detail oriented frontend software engineer. Previously founding
              team at Paytient, a new way to pay for out of pocket health care
              expenses.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p className="col-span-2 text-muted-foreground">Interests</p>
            <p className="col-span-4">
              Currently interested in designing and building world class
              software. I enjoy working with modern tools like Next.js, Prisma,
              React, React Native, Vercel, PlanetScale, OpenAI, TypeScript, and
              Tailwind CSS.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <p className="col-span-2 text-muted-foreground">Consulting</p>
            <div className="col-span-4">
              <p>
                I am available for consulting work on a limited basis. If you
                are interested in working together, please reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
