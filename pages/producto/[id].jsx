import Head from "next/head"
import ProductDetail from "@/components/product_detail/ProductDetail"
import { getProductsByCategory, getAllCategoriesAndSubCategories } from "@/utils/getProductsByCategory"
import { getProductById } from "@/utils/getProductById"

const ProductPage = ({ product, categories, featured }) => {

    return (
        <>
            <Head>
                <title>Compured</title>
                <meta name="description" content="Descripcion compured" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProductDetail product={product} categs={categories} featured={featured} />
        </>
    )
}

export default ProductPage

export async function getStaticProps({ params }) {

    const str = params.id
    const id = str.slice(str.indexOf("=") + 1, str.indexOf("&"))

    const product = await getProductById(id)
    const categories = await getAllCategoriesAndSubCategories()
    const featured = await getProductsByCategory(129)

    return {
        props: {
            product: product,
            categories: categories,
            featured: featured[0],
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