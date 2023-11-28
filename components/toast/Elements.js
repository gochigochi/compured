import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    position: fixed;
    bottom: 25px;
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const Box = styled.div`
    position: relative;
    background-color: #fff;
    box-shadow: var(--light-shadow);
    border-radius: 8px;
    padding: 18px;
    width: 90vw;
    max-width: 330px;
    display: flex;
    align-items: center;
    overflow: hidden;

    i {
        margin-right: 12px;
    }
`

const barProgress = keyframes`
    from {
        transform: scaleX(0);
    } 
    to {
        transform: scaleX(1);
    }
`
export const ProgressBarContainer = styled.div`
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ProgressBar = styled.div`
    position: relative;
    width: 90%;
    border-radius: 500px;
    height: 3px;
    transform-origin: left;
    background-color: #d9d9d9;
    cursor: pointer;
    transition: all .1s ease-in;
    animation: ${barProgress} ${({t}) => t}ms linear;
`