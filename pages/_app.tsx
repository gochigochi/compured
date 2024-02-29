import { Public_Sans } from "next/font/google"
import { store } from "../store/store"
import { Provider } from "react-redux"
import '@/styles/globals.css'
import Layout from "@/components/layout/Layout"
import CategoriesContextProvider from "@/context/CategoriesContext"
import CartContextProvider from "@/context/CartContext"
import ErrorBoundary from "@/components/errors/ErrorBoundary"
import GeneralError from "@/components/errors/general_error/GeneralError"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <CategoriesContextProvider>
        <Provider store={store}>
          <Layout className={publicSans.className}>
            <ErrorBoundary fallback={<GeneralError />}>
              <Component {...pageProps} />
            </ErrorBoundary>
          </Layout>
        </Provider>
      </CategoriesContextProvider>
    </CartContextProvider>
  )
}
