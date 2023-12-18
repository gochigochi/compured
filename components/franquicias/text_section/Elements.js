import styled from "styled-components"

export const Inner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    gap: 35px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;

    img { 
        object-fit: cover;
    }
`

export const Left = styled.div`
    display: grid;
    gap: 10px;
`

export const Right = styled.div`
    min-height: 350px;

    @media all and (max-width: 450px) {
        display: none;
    }
`