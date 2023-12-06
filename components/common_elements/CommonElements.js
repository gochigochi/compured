import styled from "styled-components"

export const ContainerFluid = styled.div`
    position: relative;
    padding: 30px 12px;
    height: 100%;
    ${({bgcolor}) => bgcolor && `background-color: ${bgcolor}`}

    @media all and (max-width: 650px) {
        padding: 8px 10px;
    }
`

export const Inner = styled.div`
    max-width: var(--inner-max-width);
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;

    @media all and (max-width: 650px) {
        padding: 0px;
    }
`

export const PageTitle = styled.h1`
    font-size: 2.3rem;
    margin: 15px 0;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;
`

export const SectionTitleSub = styled.p``