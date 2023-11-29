import styled from "styled-components"

export const Container = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid var(--soft-gray);
    display: flex;
    gap: 30px;
`

export const ImageContainer = styled.div`
    position: relative;
    padding: 20px;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid var(--soft-gray);
    flex-shrink: 0;
`

export const Details = styled.div`
    position: relative;
`

export const Title = styled.h3`
    // font-size: 1rem;
    margin-bottom: 10px;
`

export const Price = styled.p`
    font-weight: bold;
    // font-size: 1rem;
    margin-bottom: 10px;
`

export const Qty = styled.p`
    // font-size: .8rem;
    margin-bottom: 10px;
`