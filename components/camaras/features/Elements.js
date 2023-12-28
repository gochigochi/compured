import styled from "styled-components"

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
`

export const Box = styled.div`
    position: relative;
    min-height: 25rem;
    flex: 1 0 450px;
    padding: 65px;
    box-shadow: var(--light-shadow);
    border-radius: 12px;
    overflow: hidden;

    h3 {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    p {
        max-width: 350px;
    }

    img {
        position: absolute;
        bottom: -8rem;
        right: -5rem;
        margin-right: 15px;
        object-fit: contain;
        z-index: -1;
    }

    @media all and (max-width: 500px) {
        flex-basis: 300px;
        padding: 35px;

        img {
            bottom: -10rem;
        }
    }
`