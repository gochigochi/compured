import dynamic from 'next/dynamic'
import Head from 'next/head'
import { getProductsByCategory, getAllCategoriesAndSubCategories } from "@/utils/getProductsByCategory"
import SEO from '@/components/seo/SEO'
import BannerCarousel from '@/components/banner_carousel/BannerCarousel'
import Featured from '@/components/featured/Featured'
import Categories from '@/components/home/categories/Categories'
import Services from '@/components/home/services/Services'

const Clients = dynamic(() => import('../components/home/clients/Clients'))
const Contact = dynamic(() => import('../components/contact/Contact'))

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
      <div className="section-fluid">
        <div className="section-inner flex flex-col gap-10">
          <BannerCarousel />
          <Featured products={products} />
          <Categories categs={categories} />
          <Services />
          <Clients />
          <Contact />
        </div>
      </div>
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