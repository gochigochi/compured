import Head from 'next/head'
import { getProductsByCategory, getAllCategoriesAndSubCategories } from "@/utils/getProductsByCategory"
import Home from '@/components/home/Home'
import SEO from '@/components/seo/SEO'

export default function HomePage({ products, categories }) {

  return (
    <>
      <Head>
        <title>Compured - Tienda</title>
        <meta name="description" content="Descripcion compured" key="Compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="Compured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO />
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