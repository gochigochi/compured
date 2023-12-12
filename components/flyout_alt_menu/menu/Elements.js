import styled from "styled-components"

export const Layer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(1px);
    background-color: rgba(0, 0, 0, 0.05);
`

export const MenuContainer = styled.div`
    position: fixed;
    top: 85px;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    padding: 25px;
    width: 85vw;
    max-width: 450px;
    max-height: 80vh;
    background-color: #fff;
    box-shadow: 0px 15px 25px 0px rgba(146, 157, 161, 0.6);
    border-radius: 12px;
    overflow-y: auto;
    overflow-behaviour: contain;
    z-index: 500;
`

export const MenuItem = styled.button`
    padding: 25px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
        background-color: #ededed;

        i {
            right: 25px;
            opacity: 1;
        }
    }
`