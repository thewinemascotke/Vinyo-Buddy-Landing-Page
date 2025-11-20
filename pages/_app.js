import '@styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'

function Application({ Component, pageProps }) {

  // This logic finds your "Chat" and "Get Started" buttons and connects them to Botpress
  useEffect(() => {
    const handleButtonClick = (e) => {
      // Look for any clicked link or button
      const target = e.target.closest('a') || e.target.closest('button');
      
      if (target) {
        const text = target.innerText.toLowerCase();
        // If the button says "Chat" or "Start", open the bot instead of linking
        if (text.includes('chat') || text.includes('start') || text.includes('ask')) {
          e.preventDefault(); // Don't go to a new page
          if (window.botpressWebChat) {
            window.botpressWebChat.sendEvent({ type: 'show' }); // Open Botpress
          }
        }
      }
    };

    // Listen for clicks anywhere on the page
    document.addEventListener('click', handleButtonClick);
    
    // Cleanup when leaving
    return () => document.removeEventListener('click', handleButtonClick);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      
      {/* 1. Botpress Main Library (The Brain) */}
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" 
        strategy="afterInteractive"
      />
      
      {/* 2. Botpress Configuration (Your Vinyo Buddy) */}
      <Script 
        src="https://files.bpcontent.cloud/2025/11/20/18/20251120184757-GWRR1APM.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}

export default Application
