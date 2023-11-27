import { Public_Sans } from "next/font/google"
import '@/styles/globals.css'
import Layout from "@/components/layout/Layout"
import CategoriesContextProvider from "@/context/CategoriesContext"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  return (
    <CategoriesContextProvider>
      <Layout className={publicSans.className}>
        <Component {...pageProps} />
      </Layout>
    </CategoriesContextProvider>
  )
}
