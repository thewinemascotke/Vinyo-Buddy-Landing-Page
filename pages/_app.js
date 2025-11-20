import '@styles/globals.css'
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return (
    <>
      {/* This renders your beautiful website pages */}
      <Component {...pageProps} />
      
      {/* 1. Botpress Main Library */}
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" 
        strategy="afterInteractive"
      />
      
      {/* 2. Botpress Configuration (Vinyo Buddy) */}
      <Script 
        src="https://files.bpcontent.cloud/2025/11/20/18/20251120184757-GWRR1APM.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}

export default Application
