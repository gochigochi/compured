import styled from "styled-components"
import Link from "next/link"

export const MenuContainer = styled.nav`
    position: relative;
    top: 2px;
    margin: 0 30px;
    display: flex;
    gap: 25px;
    align-items: center;
`

export const MenuLink = styled(Link)`
    font-weight: 500;
`