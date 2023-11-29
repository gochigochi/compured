import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 45px 0;
`

export const Card = styled(motion.div)`
    position: relative;
    width: 32%;
    height: 500px;
    margin-bottom: 20px;
    border-radius: 12px;
    overflow: hidden;

    &:nth-child(2), &:nth-child(5) {
        position: relative;
        top: 55px;
    }

    background-color: #f4f4f4;
`