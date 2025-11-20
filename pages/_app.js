import '@styles/globals.css'
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* Botpress Main Library */}
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" 
        strategy="afterInteractive"
      />
      
      {/* Botpress Configuration (Your Unique Bot) */}
      <Script 
        src="https://files.bpcontent.cloud/2025/11/20/18/20251120184757-GWRR1APM.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}

export default Application

export default Application

