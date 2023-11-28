import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Img, SwiperContainer } from './Elements'
import NavButtons from '../nav_buttons/NavButtons'

const ProductSwiper = ({ images }) => {
  return (
    <SwiperContainer>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          images.map(image => {
            return (
              <SwiperSlide key={image.imagen}>
                <Img src={image.imagen} alt="" fill />
              </SwiperSlide>
            )
          })
        }
        <NavButtons />
      </Swiper>
    </SwiperContainer>
  )
}

export default ProductSwiper