import { Public_Sans } from "next/font/google"
import '@/styles/globals.css'
import Layout from "@/components/layout/Layout"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  return (
    <Layout className={publicSans.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
