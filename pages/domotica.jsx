import Domotica from '@/components/domotica/Domotica'
import SEO from '@/components/seo/SEO'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const DomoticaPage = ({ categories }) => {
  return(
    <>
      <SEO title="Compured - Domotica" description="Transforma tu hogar. Insumos de domotica" />
      <Domotica categs={categories} />
    </>
  )
}

export default DomoticaPage

export async function getStaticProps() {

    const categories = await getAllCategoriesAndSubCategories()
  
    return {
      props: {
        categories: categories,
      },
    }
  }