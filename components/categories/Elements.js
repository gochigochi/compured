import styled from "styled-components"

export const List = styled.div`
    display: grid;
    max-width: 400px;
    gap: 25px;
    margin: 0 auto;

    @media all and (max-width: 650px) {
        margin: 25px 0;
    }
`

export const El = styled.button`
    padding: 10px;
    border-radius: 8px;
    box-shadow: var(--light-shadow);
    display: grid;
    grid-template-columns: 75px 1fr;
    gap: 10px;
    background-color: #fff;

    img {
        justify-self: center;
        border-radius: 500px;
    }

    p {
        align-self: center;
    }
`