import { useSwiper } from 'swiper/react'
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { LeftNavButton, RightNavButton } from "./Elements"

const NavButtons = () => {

    const swiper = useSwiper()

    return (
        <>
            <LeftNavButton onClick={() => swiper.slidePrev()}>
                {/* <IoIosArrowBack /> */}
            </LeftNavButton>
            <RightNavButton onClick={() => swiper.slideNext()}>
                {/* <IoIosArrowForward /> */}
            </RightNavButton>
        </>
    )
}

export default NavButtons