import styled from "styled-components"

const Element = styled.h1`
    font-size: 2.5rem;
    color: #fff;

    @media all and (max-width: 550px) {
        font-size: 2rem;
    }

    @media all and (max-width: 450px) {
        font-size: 1.85rem;
    }
`

const Title = ({ children, ...props }) => <Element {...props} >{children}</Element>

export default Title