import styled from "styled-components";

export const ContactSection = styled.section`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 10px;
    border-radius: 12px;
    box-shadow: var(--light-shadow);
    padding: 12px;
`

export const FormContainer = styled.div`
    grid-column: span 6 / span 6;
    padding: 35px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const MapContainer = styled.div`
    grid-column: span 6 / span 6;
`