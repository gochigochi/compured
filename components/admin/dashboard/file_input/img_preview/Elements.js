import styled from "styled-components"

export const Overlay = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const Button = styled.button`
    position: relative;
    background-color: rgba(250, 250, 250, .2);
    border-radius: 4px;
    padding: .2rem;
    color: #fff;
`

export const Input = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    text-transform: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    pointer-events: none;
`