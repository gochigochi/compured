import styled from "styled-components"
import Link from "next/link"

export const MenuContainer = styled.nav`
    position: relative;
    top: 2px;
    margin-left: 100px;
    display: flex;
    gap: 25px;
`

export const MenuLink = styled(Link)`
    font-weight: 500;
`