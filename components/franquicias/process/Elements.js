import styled from "styled-components"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 15px;
`

export const Item = styled.div`
    position: relative;
    padding: 20px;
    border-radius: 15px;
    box-shadow: var(--light-shadow);
    min-height: 150px;

    h3 {
        margin-bottom: 10px;
    }

    p {
        max-width: 75%;
    }

    img {
        position: absolute;
        right: 25px;
    }
`