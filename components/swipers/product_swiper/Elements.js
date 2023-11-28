import Image from "next/image"
import styled from "styled-components"

export const SwiperContainer = styled.div`
    position: relative;

    .mySwiper {
        background-color: #fff;
        border-radius: 12px;
        width: 500px;
        height: 380px;
        box-shadow: var(--light-shadow);
        padding: 1rem 0 3rem 0;
    }
`

export const Img = styled(Image)`
    object-fit: contain;
    // left: 50% !important;
    top: 50% !important;
    height: 90% !important;
    transform: translateY(-50%) !important;
`