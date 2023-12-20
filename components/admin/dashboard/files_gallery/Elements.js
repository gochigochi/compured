import styled from "styled-components"

export const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
`

export const Thumb = styled.div`
    position: relative;
    height: auto;
    flex: 1 0 250px;
    aspect-ratio: ${({view}) => view === "desktop" ? "3/1" : "1/1"};
    border-radius: 12px;
    overflow: hidden;

    &:hover > button {
        opacity: 1;
        bottom: 1rem;
    }
`

export const Button = styled.button`
    position: absolute;
    border-radius: 4px;
    padding: .2rem;
    background-color: rgba(250, 250, 250, .2);
    color: #fff;
    opacity: 0;
    right: 1rem;
    bottom: .2rem;
    transition: all .2s;
`