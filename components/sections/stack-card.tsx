import { Container } from '../fragments/container'

export function StackCard() {
  return (
    <Container className="max-w-3xl px-4 md:px-0 md:py-12">
      <div className="rounded-xl bg-muted p-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* col 1 */}
          <div className="flex">
            <div>Img here</div>
            <div>
              <h3>Stack</h3>
              <p>type</p>
            </div>
          </div>
          {/* col 2 */}
          <div className="flex">
            <div>Img here</div>
            <div>
              <h3>Stack</h3>
              <p>type</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
