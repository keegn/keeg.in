'use client'

import Script from 'next/script'

export const Cline = () => {
  return (
    <>
      <Script id="cline-site-id" strategy="beforeInteractive">
        {`window.EXPERIMENT_SITE_ID="6504850a6a495dff64656521";`}
      </Script>
      <Script
        id="cline"
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/cline-client-script/cline.min.js"
      />
    </>
  )
}
