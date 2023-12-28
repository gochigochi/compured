import Camaras from '@/components/camaras/Camaras'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const CamarasPage = ({ categories }) => <Camaras categs={categories} />

export default CamarasPage

export async function getStaticProps() {

    const categories = await getAllCategoriesAndSubCategories()
  
    return {
      props: {
        categories: categories,
      },
    }
  }