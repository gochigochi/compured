import styled from "styled-components"
import { motion } from "framer-motion"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    row-gap: 100px;
    place-items: center;
    margin: 50px auto;

    @media all and (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media all and (max-width: 450px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const ImageContainer = styled(motion.div)``