import Head from "next/head"
import { getProductsByCategory, getAllCategoriesAndSubCategories } from "@/utils/getProductsByCategory"
import ProductsList from "@/components/products_list/ProductsList"
import { searchProducts } from "@/utils/search"

const ProductsPage = ({ products, categories }) => {
  return (
    <>
      <Head>
        <title>Compured</title>
        <meta name="description" content="Descripcion compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsList products={products} categs={categories} />
    </>
  )
}

export default ProductsPage

export async function getStaticProps({ params }) {

  const str = params.category
  const categories = await getAllCategoriesAndSubCategories()
  
  if (str.includes("id")) {
    const category = str.slice(str.indexOf("=") + 1, str.indexOf("&"))
    const products = await getProductsByCategory(category)

    return {
      props: {
        products: products[0],
        categories: categories,
      },
      revalidate: 10,
    }
  }

  if (str.includes("search")) {
    const query = str.slice(str.indexOf("=") + 1)
    const products = await searchProducts(query)

    return {
      props: {
        products: products,
        categories: categories,
      },
      revalidate: 10,
    }
  }
}

export async function getStaticPaths() {

  //Nothing to prerender
  const paths = []

  return { paths, fallback: "blocking" }
}