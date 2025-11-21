import '@styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'

function Application({ Component, pageProps }) {

  // Global Click Listener to handle "Chat" buttons
  useEffect(() => {
    const handleButtonClick = (e) => {
      // Find if the user clicked a link or button
      const target = e.target.closest('a') || e.target.closest('button');
      
      if (target) {
        const text = target.innerText.toLowerCase();
        
        // IF it is a Chat/Start button...
        if (text.includes('chat') || text.includes('start') || text.includes('ask')) {
          e.preventDefault(); // Don't follow the link
          e.stopPropagation(); // Stop other events
          
          // Check if Botpress is ready
          if (typeof window !== 'undefined' && window.botpress) {
            console.log("Opening Botpress...");
            window.botpress.open();
          } else {
            // If not ready yet, tell the user!
            alert("Vinyo Buddy is just waking up! Please click again in 2 seconds. 🍷");
            console.log("Botpress not loaded yet");
          }
        }
      }
    };

    // Attach listener to the window (nuclear option) to catch all clicks
    window.addEventListener('click', handleButtonClick, true);
    
    // Cleanup
    return () => window.removeEventListener('click', handleButtonClick, true);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      
      {/* 1. Botpress Main Library - Load ASAP */}
      <Script 
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js" 
        strategy="afterInteractive"
      />
      
      {/* 2. Botpress Configuration - Load ASAP */}
      <Script 
        src="https://files.bpcontent.cloud/2025/11/20/18/20251120184757-GWRR1APM.js" 
        strategy="afterInteractive" 
      />
    </>
  )
}

export default Application
