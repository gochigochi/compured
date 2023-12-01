import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ProductCard from '@/components/product_card/ProductCard'
import { SwiperContainer } from './Elements'
import NavButtons from "../nav_buttons/NavButtons"

const ProductsSwiper = ({ products }) => {
  return (
    <SwiperContainer>
      <Swiper
        breakpoints={{
          460: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        pagination={{ clickable: false }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          products.map(product => {
            return (
              <SwiperSlide key={product.idproducto}>
                <ProductCard product={product} />
              </SwiperSlide>
            )
          })
        }
        <NavButtons />
      </Swiper>
    </SwiperContainer>
  )
}

export default ProductsSwiper