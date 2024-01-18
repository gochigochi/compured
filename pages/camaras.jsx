import Camaras from '@/components/camaras/Camaras'
import SEO from '@/components/seo/SEO'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const CamarasPage = ({ categories }) => {
  return (
    <>
      <SEO title="Compured - Seguridad" />
      <Camaras categs={categories} />
    </>
  )
}

export default CamarasPage

export async function getStaticProps() {

  const categories = await getAllCategoriesAndSubCategories()

  return {
    props: {
      categories: categories,
    },
  }
}