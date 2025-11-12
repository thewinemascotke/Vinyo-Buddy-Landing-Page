import '@styles/globals.css'
import Script from 'next/script' // Import the Next.js Script component

function Application({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      {/* This script loads the Coze library first */}

<script src="https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/1.2.0-beta.6/libs/oversea/index.js"></script>
<script>
  new CozeWebSDK.WebChatClient({
    config: {
      bot_id: '7568451471281618945',
    },
    componentProps: {
      title: 'Coze',
    },
    auth: {
      type: 'token',
      token: 'pat_Yg6Fl1k5ZcSYgg3blx6qjCLjILzsLrFcOP7qp3Yq13KRenzOobHq8011zSzKXFjy
,
      onRefreshToken: function () {
        return 'pat_Yg6Fl1k5ZcSYgg3blx6qjCLjILzsLrFcOP7qp3Yq13KRenzOobHq8011zSzKXFjy
'
      }
    }
  });
</script>

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
