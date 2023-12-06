import { Public_Sans } from "next/font/google"
import '@/styles/globals.css'
import Layout from "@/components/layout/Layout"
import CategoriesContextProvider from "@/context/CategoriesContext"
import CartContextProvider from "@/context/CartContext"
import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import { GeneralError } from "@/components/forms/Elements"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <CategoriesContextProvider>
        <Layout className={publicSans.className}>
          <ErrorBoundary fallback={<GeneralError />}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Layout>
      </CategoriesContextProvider>
    </CartContextProvider>
  )
}
