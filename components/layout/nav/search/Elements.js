import styled from "styled-components"

// MAKE IT FORM
export const SearchContainer = styled.form` 
    display: flex;
    align-items: center;
`

export const SearchInput = styled.input`
    width: 100%;
    height: 35px;
    border-radius: 500px 0 0 500px;
    border: 1px solid #cfd7d9;
    padding: 5px 20px;
    font-size: 1rem;
`

export const Button = styled.button`
    cursor: pointer;
    border-radius: 0 500px 500px 0;
    border: 1px solid #cfd7d9;
    border-left: none;
    height: 35px;
    padding: 5px;
    width: 65px;
    display: grid;
    place-items: center;

    svg {
        font-size: 1.4rem;
    }
`