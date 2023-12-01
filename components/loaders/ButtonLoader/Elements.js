import styled, { keyframes } from "styled-components"

const animation = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
`

export const Element = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5px;
    width: 30px;
    border-radius: calc(5px / 2);
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #fff;
        opacity: .1;
        transition: background-color 0.3s ease;
    }

    &::after {
        content: '';
        height: 100%;
        width: 100%;
        border-radius: calc(5px / 2);
        animation: ${animation} 1.4s ease-in-out infinite;
        transform: translateX(-100%);
        background-color: #fff;
        transition: background-color 0.3s ease;
    }
`

