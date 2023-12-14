import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--gray-bg);
    margin: 0 0 30px 0;
    border-radius: 500px;
    width: 100%;
    padding: 16px 44px;

    @media all and (max-width: 500px) {
        padding: 12px 25px;
        margin: 0 0 15px 0;
    }
`

export const List = styled.div`
    display: grid;

    button {
        padding: 25px 15px;
        border-bottom: 1px solid var(--soft-gray);
        display: block;
    }

    button:last-child {
        border: none;
    }
`