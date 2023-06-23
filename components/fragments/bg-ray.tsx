import Image from 'next/image'

export function BgRay() {
  return (
    <Image
      src="/design/bgray.png"
      alt="Next.js"
      width={1000}
      height={1000}
      className="right-100 pointer-events-none absolute -top-20 left-0 z-0 mx-auto  h-full w-full select-none "
    />
  )
}
