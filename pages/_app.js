import '@styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'

function Application({ Component, pageProps }) {
  useEffect(() => {
    // Global Window Listener with Capture Phase
    window.addEventListener('click', (e) => {
      // 1. Find if the click was on (or inside) a link or button
      const target = e.target.closest('a') || e.target.closest('button');

      if (target) {
        const text = target.innerText.toLowerCase();

        // 2. Check for our specific buttons
        if (text.includes('chat') || text.includes('start') || text.includes('ask')) {

          // 3. STOP everything else. Prevent navigation.
          e.preventDefault();
          e.stopImmediatePropagation();

          // 4. Execute Botpress Logic
          if (window.botpress) {
            window.botpress.open();
          } else {
            alert("Just letting the knowledge breathe... 🍷 Please click again in a second!");
          }
        }
      }
    }, true); // <--- The 'true' here is critical. It forces this to run BEFORE Next.js.
  }, []);

  return (
    <>
      <Component {...pageProps} />

      {/* Botpress Scripts - Load with afterInteractive for faster availability */}
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