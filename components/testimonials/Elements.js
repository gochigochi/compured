import styled from "styled-components"

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 15px;
`

export const Card = styled.div`
    padding: 25px;
    background-color: var(--alt-soft-bg);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    border-radius: 8px;
`

export const Author = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 25px;

    img {
        object-fit: cover;
        border-radius: 50px;
        align-self: flex-end;
        margin-bottom: 10px;
    }

    p {
        text-align: right;
        margin-bottom: 5px;
    }
`