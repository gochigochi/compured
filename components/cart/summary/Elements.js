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

export const CheckoutButton = styled.div`
    background-color: var(--blue);
    color: #fff;
    width: 100%;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    cursor: pointer;
    transition: all .2s;
    position: relative;

    img {
        position: absolute;
        right: 15px;
        margin-left: 15px;
        object-fit: contain;
        background-color: white;
        color: transparent;
        padding: 4px;
        border-radius: 50px;
        transition: right .2s;
    }

    i {
        position: absolute;
        opacity: 0;
        right: 5px;
        transition: all .2s;
    }

    &:hover {
        background-color: var(--dark-blue);

        img {
            right: 40px;
        }

        i {
            right: 10px;
            opacity: 1;
        }
    }
`