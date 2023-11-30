import Head from 'next/head'
import { getProductsByCategory, getAllCategoriesAndSubCategories } from "@/utils/getProductsByCategory"
import Home from '@/components/home/Home'

export default function HomePage({ products, categories }) {

  return (
    <>
      <Head>
        <title>Compured</title>
        <meta name="description" content="Descripcion compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home products={products} categs={categories} />
    </>
  )
}

export async function getStaticProps() {

  // cat. 129 DESTACADOS
  // cat. 0 TODOS LOS PRODUCTOS
  const products = await getProductsByCategory(129)
  const categories = await getAllCategoriesAndSubCategories()

  return {
    props: {
      products: products[0],
      categories: categories,
    },
    revalidate: 10,
  }
}