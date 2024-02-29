import styled from "styled-components"

export const IconContainer = styled.div`
    position: relative;
    display: grid;
`

export const Badge = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    right: -6px;
    top: -3px;
    display: grid;
    place-items: center;
    border-radius: 50px;
    background-color: var(--comp);
    font-size: .6rem;
`