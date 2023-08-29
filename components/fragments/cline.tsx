'use client'

import Script from 'next/script'

export default function Cline() {
  return (
    <>
      <Script
        id="cline"
        src="https://cdn.jsdelivr.net/npm/cline-client-script/cline.min.js"
      />
      <Script id="cline-page-id">
        {`window.EXPERIMENT_PAGE_ID="64ed658c2c5871d93b500ac2";`}
      </Script>
    </>
  )
}
