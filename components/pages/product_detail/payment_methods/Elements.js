import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div``

export const Title = styled.p``

export const Table = styled.table`
    table-layout: auto;
    border-collapse: collapse;

    @media all and (max-width: 650px) {
        margin: 15px 0 0 25px;
    }

    @media all and (max-width: 460px) {
        margin-left: 0;
    }
`

export const Row = styled.tr`
    & > td:first-child {
        @media all and (max-width: 650px) {
            display: none;
        }
    }
`

export const Data = styled.td`
    font-size: .8rem;
    color: var(--text-light);
    padding-right: 50px;

    @media all and (max-width: 460px) {
        padding-right: 35px;   
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 40px;
    height: 50px;
    display: grid;
    place-items: center;
`

export const Logo = styled(Image)`
    object-fit: contain;
`