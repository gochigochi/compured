import styled from "styled-components"
import Image from "next/image"

export const Container = styled.button`
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--light-shadow);
    border: 1px solid rgba(25, 141, 179, 0.1);
    background-color: #fff;
    overflow: hidden;
`

export const Top = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
`

export const Bottom = styled.div`
    position: relative;
    margin-top: 15px;
    padding: 0 15px;

    &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: calc(100% - 15px);
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--soft-gray);
    }
`

export const Img = styled(Image)`
    object-fit: contain;
`


export const Title = styled.p`
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
`

export const Price = styled.p`
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${({available}) => available ? "inherit" : "var(--soft-gray)"};
`

export const Text = styled.p`
    color: var(--text-light);
    font-size: 0.8em;
`

export const Stock = styled.span`
    color: var(--alert);
    font-size: .8rem;
    margin-left: 8px;
`