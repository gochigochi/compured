import styled from "styled-components"

export const CartContainer = styled.div`
    
    @media all and (min-width: 960px) {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: 10px;    
    }
`

export const ItemList = styled.div`
    border-top: 1px solid var(--soft-gray);
    grid-column: span 7 / span 7;
    margin-right: 50px;
`

export const SummaryContainer = styled.div`
    grid-column: span 5 / span 5;
    max-width: 450px;
`

export const EmptyCart = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;
`