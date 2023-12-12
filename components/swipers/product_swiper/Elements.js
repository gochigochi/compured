import Image from "next/image"
import styled from "styled-components"

export const SwiperContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: start;

    .mySwiper {
        background-color: #fff;
        border-radius: 12px;
        width: 500px;
        max-width: 85vw;
        height: 380px;
        box-shadow: var(--light-shadow);
        padding: 1rem 0 3rem 0;
        margin: inherit;
    }

    @media all and (max-width: 650px) {
        margin-top: 10px;
    }
`

export const Img = styled(Image)`
    object-fit: contain;
    top: 50% !important;
    height: 90% !important;
    transform: translateY(-50%) !important;
`