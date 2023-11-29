import styled from "styled-components"

export const List = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 5px 0;
    gap: 25px;
    min-height: 500px;
`

export const NoProducts = styled.div`
    width: 100%;
    height: 80vh;
    display: grid;
    place-items: center;
`