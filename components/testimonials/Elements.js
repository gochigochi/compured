import styled from "styled-components"

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 3.5rem;
    margin-top: 5rem;
`

export const Card = styled.div`
    padding: 2.5rem;
    background-color: var(--alt-soft-bg);
    box-shadow: var(--light-shadow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
`