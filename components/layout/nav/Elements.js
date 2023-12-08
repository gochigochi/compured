import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

export const Container = styled.header`
    position: relative;
    box-shadow: 0px 5px 11px 0px rgba(25, 141, 179, 0.1);
    z-index: 800;
`

export const Inner = styled.div`
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 12px;
`

export const LogoContainer = styled(Link)`
    position: relative;
    height: 70px;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const CartContainer = styled(Link)`
    display: grid;
    place-items: center;
    margin-left: 10px;
`