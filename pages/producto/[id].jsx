import { getProductsByCategory, getAllCategoriesAndSubCategories } from "@/utils/getProductsByCategory"
import { getProductById } from "@/utils/getProductById"

const ProductPage = ({ product, categories }) => {

    return (
        <div>{product.nombre}</div>
    )
}

export default ProductPage

export async function getStaticProps({ params }) {

    const product = await getProductById(params.id)
    const categories = await getAllCategoriesAndSubCategories()

    return {
        props: {
            product: product,
            categories: categories,
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {

    // FOR TEST BUILDS
    const paths = []

    // PRODUCTION
    // const products = await getProductsByCategory(0)
  
    // const paths = products[0].map(product => ({
    //   params: { id: product.idproducto }
    // }))
  
    return { paths, fallback: "blocking" }
  }