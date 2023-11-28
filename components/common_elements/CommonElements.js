import styled from "styled-components"

export const ContainerFluid = styled.div`
    position: relative;
    padding: 30px 12px;
    ${({bgcolor}) => bgcolor && `background-color: ${bgcolor}`}
`

export const Inner = styled.div`
    max-width: var(--inner-max-width);
    margin: 0 auto;
    padding: 0 20px;
`

export const PageTitle = styled.h1`
    font-size: 2.3rem;
    margin: 15px 0;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;
`

export const SectionTitleSub = styled.p``