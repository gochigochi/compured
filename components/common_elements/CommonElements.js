import styled from "styled-components"

export const ContainerFluid = styled.div`
    position: relative;
    padding: 30px 12px;
    height: 100%;
    background-color: ${({bgcolor}) => bgcolor && bgcolor};
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

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`

export const PageTitle = styled.h1`
    font-size: 2.3rem;
    margin: 15px 0;
`

export const SectionTitle = styled.h2`
    font-size: 2rem;

    @media all and (max-width: 550px) {
        font-size: 1.4rem;
    }
`

export const SectionTitleSub = styled.p`
    @media all and (max-width: 550px) {
        font-size: .9rem;
    }
`

export const SectionContainer = styled.div`
    max-width: var(--inner-max-width);
    margin: 0 auto;
    padding: 30px;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    background: linear-gradient(102deg, rgba(0, 112, 149, 0.03) 32.91%, rgba(192, 100, 239, 0.03) 55.44%);
`