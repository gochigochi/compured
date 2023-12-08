import styled from "styled-components"

export const Nav = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 150px) 1fr minmax(250px, 500px) 50px;

    @media all and (max-width: 860px) {
        display: none;
    }
`