import styled from "styled-components"

const Element = styled.h2`
    font-size: 2rem;
    color: var(--contrast);

    @media all and (max-width: 450px) {
        font-size: 1.6rem;
    }
`

const SubTitle = ({ children }) => <Element>{children}</Element>

export default SubTitle