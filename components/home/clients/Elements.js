import styled from "styled-components"
import { motion } from "framer-motion"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    row-gap: 100px;
    place-items: center;
    margin: 50px auto;
`

export const ImageContainer = styled(motion.div)``