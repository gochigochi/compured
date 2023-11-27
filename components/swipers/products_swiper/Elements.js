import styled from "styled-components"

export const SwiperContainer = styled.div`
    position: relative;
    z-index: 0;

    .mySwiper {
        padding: 1rem 0 3rem 0;
    }
`

export const LeftNavButton = styled.div`
    position: absolute;
    top: 50%;
    left: -22px;
    transform: translateY(-75%);
    display: grid;
    place-items: center;
    width: 55px;
    height: 55px;
    cursor: pointer;
    z-index: 200;
    border-radius: 500px;
    background-color: #ededed;

    svg {
        font-size: 30px;
        position: relative;
        left: 5px;
    }
`

export const RightNavButton = styled.div`
    position: absolute;
    top: 50%;
    right: -22px;
    transform: translateY(-75%);
    display: grid;
    place-items: center;
    width: 55px;
    height: 55px;
    cursor: pointer;
    z-index: 200;
    border-radius: 500px;
    background-color: #ededed;

    svg {
        font-size: 30px;
        position: relative;
        right: 5px;
    }
`