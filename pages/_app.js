import '@styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'

function Application({ Component, pageProps }) {

  // 1. BUTTON LOGIC: Makes the buttons open the bot
  useEffect(() => {
    const handleButtonClick = (e) => {
      // Find the closest link or button tag
      const target = e.target.closest('a') || e.target.closest('button');
      
      if (target) {
        const text = target.innerText.toLowerCase();
        // If it's a "Chat" or "Start" button...
        if (text.includes('chat') || text.includes('start')) {
          e.preventDefault(); // Don't refresh the page
          
          // Open Botpress
          if (window.botpress) {
            window.botpress.open();
          } else {
            console.log("Botpress is loading...");
          }
        }
      }
    };

    // Listen for clicks anywhere
    document.addEventListener('click', handleButtonClick);
    
    // Cleanup
    return () => document.removeEventListener('click', handleButtonClick);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      
      {/* 2. BOTPRESS SCRIPTS */}
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="https://files.bpcontent.cloud/2025/11/20/18/20251120184757-GWRR1APM.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}

export default Application

