import styled, { keyframes } from "styled-components"

const float = keyframes`
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(15px);
    } 
`

export const FloatingImgContainer = styled.div`
    position: absolute;
    right: -40px;
    bottom: -80px;
    object-fit: contain;
    width: 320px;
    height: 320px;
    animation: ${float} 1.7s cubic-bezier(0.59, 0.01, 0.29, 0.99) 2s infinite alternate;
    z-index: 2;

    @media all and (max-width: 650px) {
        display: none;
    }
`

export const FloatingImgInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`
