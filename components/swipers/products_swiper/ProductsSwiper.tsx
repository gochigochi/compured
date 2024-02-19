import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ProductCard from '@/components/product_card/ProductCard'
import NavButtons from "../nav_buttons/NavButtons"
import { Products } from '@/models/models'

type PropsTypes = {
  products: Products
}

const ProductsSwiper = ({ products } : PropsTypes) => {

  return (
    <div className="relative z-0">
      <Swiper
        breakpoints={{
          330: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 3,
          },
          860: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
        pagination={{ clickable: false }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          products?.map(product => {
            return (
              <div key={product.idproducto}>
                <SwiperSlide>
                  <ProductCard product={product} style={{"height": "330px"}} />
                </SwiperSlide>
              </div>
            )
          })
        }
        <NavButtons />
      </Swiper>
    </div>
  )
}

export default ProductsSwiper