import styled from "styled-components"

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
    opacity: .5;
    transition: opacity .2s;

    svg {
        font-size: 30px;
        position: relative;
        left: 5px;

        path {
            color: var(--blue);
        }
    }

    &:hover {
        opacity: 1;
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
    opacity: .5;
    transition: opacity .2s;

    svg {
        font-size: 30px;
        position: relative;
        right: 5px;

        path {
            color: var(--blue);
        }
    }

    &:hover {
        opacity: 1;
    }
`