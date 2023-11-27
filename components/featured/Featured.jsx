import { SectionTitle, SectionTitleSub } from "../common_elements/CommonElements"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"

const Featured = ({ products }) => {
    return (
        <section>
            <SectionTitle>Novedades</SectionTitle>
            <SectionTitleSub>Destacados y recomendados</SectionTitleSub>
            <ProductsSwiper products={products} />
        </section>
    )
}

export default Featured