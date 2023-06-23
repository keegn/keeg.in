export function GridLarge() {
  return (
    <>
      <div className="absolute  h-32 w-screen overflow-hidden bg-[url('/design/grid-2.svg')] dark:inline-block" />

      <div className="absolute inline-block h-32 w-screen overflow-hidden bg-[url('/design/grid-2-light.svg')] dark:hidden" />
    </>
  )
}
