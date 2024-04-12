import { Public_Sans } from "next/font/google"
import '@/styles/globals.css'
import { AppProps } from "next/app"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
