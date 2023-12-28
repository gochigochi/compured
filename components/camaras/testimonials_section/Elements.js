import styled from "styled-components"
import { motion } from "framer-motion"

export const Grid = styled(motion.div)`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 15px;
`

export const Card = styled(motion.div)`
    padding: 95px 45px 75px 45px;
    background-color: var(--alt-soft-bg);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    border-radius: 8px;
    position: relative;

    img {
        position: absolute;
        top: 45px;
        left: 45px;
        object-fit: contain;
    }
`

export const Author = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    right: 25px;

    p {
        text-align: right;
        margin-bottom: 5px;
        font-weight: bold;
    }
`