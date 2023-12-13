import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 15px;
`

export const Card = styled.div`
    position: relative;
    min-height: 280px;
    background-color: var(--alt-soft-bg);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--light-shadow);
    display: grid;

    //The only one positioned
    &:hover .img-container {
        top: -5px;
        right: -110px;
    }
`

export const Content = styled.div`
    padding: 40px 0 40px 40px;

    h3 {
        font-weight: bold;
        font-size: 1.8rem;
        margin-bottom: 15px;
    }

    h3, p {
        width: 60%;
        max-width: 500px;
    }
`

export const ImageContainer = styled.div`
    position: absolute;
    top: 5px;
    right: -120px;
    transition: all .2s ease-in-out;
`

export const Img = styled.div`
    position: relative;
    width: 400px;
    height: 550px;
    border-radius: 12px;
    overflow: hidden;

    img {
        object-fit: contain;
    }
`