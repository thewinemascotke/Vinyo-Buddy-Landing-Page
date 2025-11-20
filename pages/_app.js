import '../styles/globals.css'  // <--- FIXED: Changed '@' back to '..'
import Script from 'next/script'

function Application({ Component, pageProps }) {
  return (
    <>
      {/* This renders your website content */}
      <Component {...pageProps} />
      
      {/* Botpress Script 1: The Injector */}
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" 
        strategy="lazyOnload" 
      />
      
      {/* Botpress Script 2: Your Vinyo Buddy Config */}
      <Script 
        src="https://files.bpcontent.cloud/2025/11/20/18/20251120184757-GWRR1APM.js" 
        strategy="lazyOnload" 
      />
    </>
  )
}

export default Application
