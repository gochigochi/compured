import Link from "next/link"
import styled from "styled-components"

export const Container = styled.div`
    position: relative;
`

export const Button = styled.button`
    cursor: pointer;
`

export const MenuContainer = styled.div`
    position: absolute;
    top: 50px;
    padding: 25px;
    background-color: #fff;
    display: grid;
    width: 100vw;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: scroll;
    box-shadow: var(--light-shadow);
    border-radius: 12px;
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

export const SubMenuItem = styled(Link)`
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