import { useSwiper } from 'swiper/react'
import { LeftNavButton, RightNavButton } from "./Elements"
import { LeftArrowSvg, RightArrowSvg } from '@/components/svgs/Svgs'

const NavButtons = () => {

    const swiper = useSwiper()

    return (
        <>
            <LeftNavButton onClick={() => swiper.slidePrev()}>
                <LeftArrowSvg />
            </LeftNavButton>
            <RightNavButton onClick={() => swiper.slideNext()}>
                <RightArrowSvg />
            </RightNavButton>
        </>
    )
}

export default NavButtons