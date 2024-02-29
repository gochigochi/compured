import styled from "styled-components"

export const InputHtml = styled.input`
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

    &:focus {
        outline: none;
    }
`

export const DropText = styled.p`
    color: var(--text-light);
    margin-bottom: .5rem;
`