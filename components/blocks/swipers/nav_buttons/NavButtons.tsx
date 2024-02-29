import { useSwiper } from 'swiper/react'

const NavButtons = () => {

    const swiper = useSwiper()

    return (
        <>
            <div onClick={() => swiper.slidePrev()} className="swiper-nav-btn -left-[22px]">
                <svg className="text-3xl relative left-[23px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                </svg>
            </div>
            <div onClick={() => swiper.slideNext()} className="swiper-nav-btn -right-[22px]">
                <svg className="text-3xl relative -right-[6px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </div>
        </>
    )
}

export default NavButtons