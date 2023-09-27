'use client'

import React, { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Cline() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      <Script id="cline-site-id">
        {`window.EXPERIMENT_SITE_ID="651489ffb714c72d73f2a69f";`}
      </Script>
      <Script src="https://cdn.jsdelivr.net/npm/cline-client-script/cline.min.js?v=203" />
    </>
  )
}
