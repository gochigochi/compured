import dynamic from "next/dynamic"
import ProductsSwiper from "@/components/blocks/swipers/products_swiper/ProductsSwiper"
import { Products } from "@/models/models"
import ErrorBoundary from "@/components/errors/ErrorBoundary"
const GeneralError = dynamic(() => import("../../../components/errors/general_error/GeneralError"))

type FeaturedProp = {
    products: Products
}

const Featured = ({ products } : FeaturedProp) => {
    return (
        <section>
            <h2 className="section-title">Novedades</h2>
            <p className="section-subtitle">Destacados y recomendados</p>
            <ErrorBoundary fallback={<GeneralError />}>
                <ProductsSwiper products={products} />
            </ErrorBoundary>
        </section>
    )
}

export default Featured