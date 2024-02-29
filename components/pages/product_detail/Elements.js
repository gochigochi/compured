import styled from "styled-components"

export const ProductMain = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    margin: 35px 0 85px 0;

    @media all and (max-width: 1024px) {
        grid-template-columns: 1fr;
        margin: 0 auto;
        max-width: 700px;
        row-gap: 45px;
        margin-bottom: 65px;
        padding: 0 15px;
    }
`

export const Details = styled.div``

export const Title = styled.h1`
    font-size: 2.5rem;
`

export const Price = styled.p`
    font-size: 2.5rem;
    font-weight: 400;
    margin-top: 30px;
`

export const Description = styled.p`
    margin-top: 30px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin: 35px 0 45px 0;
`

export const SelectorContainer = styled.div`
    border: 1px solid var(--blue);
    border-radius: 25px;
    padding: var(--button-padding);
    margin-right: 15px;
    position: relative;
`

export const Divider = styled.div`
    background-color: var(--soft-gray);
    height: 1px;
    margin: 35px 0;
`

export const ReturnTitle = styled.p`
    margin-bottom: 1rem;
`

export const ReturnNote = styled.p`
    font-size: .8rem;
`