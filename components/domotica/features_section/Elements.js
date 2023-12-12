import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    gap: 25px;
    margin-bottom: 25px;

    &:nth-child(even) {
        flex-direction: row-reverse;
    }
`

export const Left = styled.div`
    width: 50%;
    position: relative;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;

    img {
        object-fit: cover;
    }
`

export const Right = styled.div`
    width: 50%;
    display: grid;
    align-content: end;
    gap: 15px;
`