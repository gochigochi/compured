import Domotica from '@/components/domotica/Domotica'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const DomoticaPage = ({ categories }) => <Domotica categs={categories} />

export default DomoticaPage

export async function getStaticProps() {

    const categories = await getAllCategoriesAndSubCategories()
  
    return {
      props: {
        categories: categories,
      },
    }
  }