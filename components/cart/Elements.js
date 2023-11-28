import styled from "styled-components"

export const CartContainer = styled.div`
    
    @media all and (min-width: 960px) {
        display: grid;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        column-gap: 10px;    
    }
`

export const ItemList = styled.div`
    grid-column: span 7 / span 7;
`

export const SummaryContainer = styled.div`
    grid-column: span 5 / span 5;
`