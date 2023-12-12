import styled from "styled-components";

export const ContactSection = styled.section`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 10px;
    border-radius: 12px;
    box-shadow: var(--light-shadow);
    padding: 12px;
    margin: 40px 0;

    @media all and (max-width: 860px) {
        display: block;
    }
`

export const FormContainer = styled.div`
    grid-column: span 5 / span 5;
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media all and (max-width: 860px) {
        padding: 20px;
        margin-bottom: 25px;
    }

    @media all and (max-width: 550px) {
        padding: 10px;
    }
`

export const MapContainer = styled.div`
    grid-column: span 7 / span 7;
`

export const MapFrame = styled.div`
    position: relative;
    border-radius: 0 8px 8px 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    @media all and (max-width: 860px) {
        height: 500px;
        border-radius: 0 0 8px 8px;
    }
`

export const Directions = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 15px;
    border-radius: 8px;
    box-shadow: var(--light-shadow);
    background-color: #fff;
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media all and (max-width: 550px) {
        position: relative;
        top: 0;
        left: 0;
        padding: 35px 10px 10px 10px;
        margin-bottom: 25px;
        box-shadow: none;
        border-top: 1px solid var(--input-border);
        border-radius: 0;
    }
`

export const Item = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.span`
    margin-left: 20px;
`