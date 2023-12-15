import Franquicias from '@/components/franquicias/Franquicias'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const FranquiciasPage = ({ categories }) => <Franquicias categs={categories} />

export default FranquiciasPage

export async function getStaticProps() {

    const categories = await getAllCategoriesAndSubCategories()
  
    return {
      props: {
        categories: categories,
      },
    }
  }