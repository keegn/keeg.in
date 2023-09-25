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
        {`window.EXPERIMENT_SITE_ID="650994c56a495dff64657053";`}
      </Script>
      <Script src="https://cdn.jsdelivr.net/npm/cline-client-script/cline.min.js?v=203" />
    </>
  )
}
