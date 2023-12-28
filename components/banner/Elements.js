import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 370px;
    margin: 0 auto;
    border-radius: 30px;
    overflow: hidden;
    background-color: var(--alt-soft-bg)
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 1;
`