import Franquicias from '@/components/franquicias/Franquicias'
import SEO from '@/components/seo/SEO'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const FranquiciasPage = ({ categories }) => {
  return(
    <>
      <SEO title="Compured - Franquicias" />
      <Franquicias categs={categories} />
    </>
  )
}

export default FranquiciasPage

export async function getStaticProps() {

    const categories = await getAllCategoriesAndSubCategories()
  
    return {
      props: {
        categories: categories,
      },
    }
  }