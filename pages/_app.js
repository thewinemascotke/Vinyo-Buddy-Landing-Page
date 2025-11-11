import '@styles/globals.css'
import Script from 'next/script' // Import the Next.js Script component

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* This script loads the Coze library first */}
      <Script 
        src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js"
        strategy="afterInteractive" // Loads after the page is interactive
        onLoad={() => {
          // This function runs *after* the script above has loaded
          // Now we initialize your bot
          new CozeWebSDK.WebChatClient({
            config: {
              bot_id: '7568451471281618945', // 
            },
            componentProps: {
              title: 'Vinyo Buddy', // This is the title on the chat header
            }
          });
        }}
      />
    </>
  )
}

export default Application
