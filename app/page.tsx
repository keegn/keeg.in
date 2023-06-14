import { ModeToggle } from '@/components/fragments/mode-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="absolute right-4 top-4">
          <ModeToggle />
        </div>
      </div>
    </main>
  )
}
