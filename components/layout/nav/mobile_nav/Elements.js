import styled from "styled-components"

export const Nav = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 150px) 1fr;

    @media all and (min-width: 861px) {
        display: none;
    }
`

export const NavItems = styled.nav`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    width: 120px;
    justify-self: end;
`

export const NavItem = styled.div`
    align-self: center;
    justify-self: end;
`