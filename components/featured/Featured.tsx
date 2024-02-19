import ErrorBoundary from "../errors/ErrorBoundary"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"
import { Products } from "@/models/models"
import GeneralError from "../errors/general_error/GeneralError"

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