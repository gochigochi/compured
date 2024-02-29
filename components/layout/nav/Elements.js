import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

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
