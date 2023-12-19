import styled from "styled-components"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: .5rem;
`

export const Thumb = styled.div`
    position: relative;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
`