import { Container } from '../fragments/container'

export function ContentCard() {
  return (
    <Container className="max-w-3xl px-4 md:px-0 md:py-12">
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
            <div className="col-span-4">
              <p>
                I am available for consulting work on a limited basis. If you
                are interested in working together, please reach out.
              </p>
              <div className="mt-3 flex w-fit  items-center space-x-2 rounded-full bg-secondary px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground"></span>
                </span>
                <p className="text-sm text-secondary-foreground">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
