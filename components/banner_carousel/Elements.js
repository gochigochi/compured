import styled from "styled-components"
import Image from "next/image"

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
`

export const Img = styled(Image)`
    width: 100%;
    display: block;
    object-fit: cover;
`