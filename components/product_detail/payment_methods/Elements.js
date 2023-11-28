import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div``

export const Title = styled.p``

export const Table = styled.table`
    table-layout: auto;
    border-collapse: collapse;
`

export const Row = styled.tr`

`

export const Data = styled.td`
    font-size: .8rem;
    color: var(--text-light);
    padding-right: 50px;
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