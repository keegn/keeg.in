import type { Metadata } from 'next'

import { PitchCarusel } from '@/components/pitch/pitch-carousel'

// import { Grid } from '@/components/pitch/ui'

export const metadata: Metadata = {
  title: 'Pitch',
  description: 'Pitch deck',
}

export default function Page() {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 h-screen bg-background">
      {/* <Grid />*/}
      <PitchCarusel />
    </div>
  )
}
