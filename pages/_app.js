import '@/styles/globals.css'
import { DarkProvider } from '@/util/store'

export default function App({ Component, pageProps }) {
  return <DarkProvider><Component {...pageProps} /></DarkProvider>
  
  
}
