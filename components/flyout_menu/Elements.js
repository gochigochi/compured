import styled from "styled-components"

export const Container = styled.div`
    position: relative;
`

export const Button = styled.button`
    position: relative;
    cursor: pointer;
`

export const MenuContainer = styled.div`
    position: absolute;
    top: 50px;
    left: -137px;
    padding: 25px;
    background-color: #fff;
    display: grid;
    width: 100vw;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    overflow-behaviour: contain;
    box-shadow: var(--light-shadow);
    border-radius: 12px;
    z-index: 500;

    @media all and (max-width: 650px) {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 15px 25px 0px rgba(146, 157, 161, 0.6);
    }
`

export const MenuItem = styled.button`
    padding: 25px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        background-color: #ededed;

        i {
            right: 25px;
            opacity: 1;
        }
    }
`

export const Icon = styled.i`
    position: absolute;
    right: 30px;
    transition: all .2s ease-in-out;
    opacity: 0;

    svg {
        font-size: 5px;
    }
`

export const SubMenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px 25px 20px;
`

export const SubMenuItem = styled.button`
    padding: 25px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        background-color: #ededed;

        i {
            right: 25px;
            opacity: 1;
        }
    }
`

export const SeeAll = styled.button`
    cursor: pointer;
`

export const Return = styled.button`
    width: 20px;
    height: auto;
    display: grid;
    place-items: center;
    cursor: pointer;

    svg {
        pointer-events: none;
    }
`