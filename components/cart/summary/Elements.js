import styled from "styled-components"

export const Box = styled.div`
    background-color: #f7f7f7;
    border-radius: 12px;
    padding: 35px;
`

export const Title = styled.h3`
    margin-bottom: 25px;
`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    border-bottom: 1px solid var(--text-black);
`

export const Name = styled.p`
    font-size: .8rem;
    text-overflow: ellipse;
    max-width: 250px;

    span {
        font-weight: bold;
    }
`

export const Subtotal = styled.p`
    text-overflow: ellipse;
    max-width: 250px;
    font-weight: bold;
`

export const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 25px;

    p {
        font-weight: bold;
        margin-left: 35px;
    }
`

export const TotalPrice = styled.p`
    font-weight: bold;
    margin-left: 35px;
    font-size: 1.5rem;
`

export const CheckoutButtonContainer = styled.div`
    position: relative;
    margin-top: 25px;
    pointer-events: ${({loading}) => loading ? "none" : "auto"};

`