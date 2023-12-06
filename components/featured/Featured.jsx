import { SectionTitle, SectionTitleSub } from "../common_elements/CommonElements"
import ErrorBoundary from "../errors/ErrorBoundary"
import ComponentError from "../errors/component_error/ComponentError"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"

const Featured = ({ products }) => {
    return (
        <section>
            <SectionTitle>Novedades</SectionTitle>
            <SectionTitleSub>Destacados y recomendados</SectionTitleSub>
            <ErrorBoundary fallback={<ComponentError />}>
                <ProductsSwiper products={products} />
            </ErrorBoundary>
        </section>
    )
}

export default Featured