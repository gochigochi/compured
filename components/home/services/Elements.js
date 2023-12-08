import styled from "styled-components"
import { motion } from "framer-motion"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 45px 0;

    @media all and (max-width: 750px) {
        justify-content: center;
        padding: 25px 0;
    }
`

export const Card = styled(motion.div)`
    position: relative;
    width: 30%;
    height: 500px;
    margin-bottom: 50px;
    border-radius: 12px;
    overflow: hidden;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 25px;

    &:nth-child(2), &:nth-child(5) {
        position: relative;
        top: 55px;
    }

    @media all and (max-width: 1024px) {
        width: 48%;

        &:nth-child(5) {
            top: 0;
        }

        &:nth-child(even) {
            top: 55px;
        }
    }

    @media all and (max-width: 750px) {
        width: 100%;
        height: 400px 

        &:nth-child(2) { 
            top: 0;
        }

        &:nth-child(even) {
            top: 0;
        }
    }
`

export const Title = styled.h3`
    color: #fff;
    font-size: 2rem;
`

export const Text = styled.p`
    color: #fff;
    line-height: 1.4;
    border-left: 5px solid var(--blue);
    padding-left: 10px;
`

export const BtnText = styled.span`
    color: #fff;
    margin-left: 8px;
`