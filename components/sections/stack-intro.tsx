import { Container } from '@/components/fragments/container'

export function StackIntro() {
  return (
    <Container type="section" className="pb-12">
      <div className="rounded-xl">
        <div className="grid auto-rows-auto gap-12">
          <div className="grid grid-cols-1 gap-2">
            <p className="text-tertiary-foreground">Familiar tools</p>
            <p>
              Here are some of my favorite tools that I use daily. Recently,
              I've been using Cursor as my editor of choice for its AI
              assistance. However, I believe in using the right tool for the
              right job and have experience with many more tools beyond those
              listed below.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
