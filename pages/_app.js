import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from "@vercel/analytics/react"
function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
npm i @vercel/analytics
export default MyApp
