import { Public_Sans } from "next/font/google"
import { store } from "../store/store"
import { Provider } from "react-redux"
import '@/styles/globals.css'
import Layout from "@/components/ui/layout/Layout"
import CategoriesContextProvider from "@/context/CategoriesContext"
import CartContextProvider from "@/context/CartContext"
import ErrorBoundary from "@/components/errors/ErrorBoundary"
import GeneralError from "@/components/errors/general_error/GeneralError"
import { AppProps } from "next/app"

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <CategoriesContextProvider>
        <Provider store={store}>
          <div className={publicSans.className}>
            <Layout>
              <ErrorBoundary fallback={<GeneralError />}>
                <Component {...pageProps} />
              </ErrorBoundary>
            </Layout>
          </div>
        </Provider>
      </CategoriesContextProvider>
    </CartContextProvider>
  )
}
