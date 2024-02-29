import styled from "styled-components"

export const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 10;
`

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    padding: 25px;
    width: 90vw;
    max-width: 450px;
    height: 80svh;
    background-color: #fff;
    box-shadow: 0px 15px 25px 0px rgba(146, 157, 161, 0.6);
    border-radius: 12px;
    overflow-y: auto;
    overflow-behaviour: contain;
    z-index: 500;
`