import Head from 'next/head'
import { getProductsByCategory } from "@/utils/getProductsByCategory"
import SEO from '@/components/seo/SEO'
import { Categories as Categs, Products } from '@/models/models'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Home from '@/components/pages/home/Home'

export const getStaticProps = (async () => {

  // cat. 129 DESTACADOS
  // cat. 0 TODOS LOS PRODUCTOS
  const products = await getProductsByCategory(129)

  return {
    props: {
      products: products[0],
    },
    revalidate: 10,
  }
}) satisfies GetStaticProps<{ products: Products }>

export default function HomePage({
   products
  } : InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Head>
        <title>Compured - Tienda</title>
        <meta name="description" content="Descripcion compured" key="Compured" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="Compured" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SEO />
      <Home products={products} />
    </>
  )
}