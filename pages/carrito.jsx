import Cart from '@/components/cart/Cart'
import { getAllCategoriesAndSubCategories } from '@/utils/getProductsByCategory'

const CartPage = ({ categories }) => <Cart categs={categories} />

export default CartPage

export async function getStaticProps() {

    const categories = await getAllCategoriesAndSubCategories()
  
    return {
      props: {
        categories: categories,
      },
      revalidate: 10,
    }
  }