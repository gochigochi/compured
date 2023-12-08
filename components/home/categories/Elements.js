import styled from "styled-components"

export const Section = styled.section`
    border-radius: 8px;
    padding: 25px;
    background: var(--basic-gradient);
`

export const Header = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;

    @media all and (max-width: 391px) {
        flex-direction: column;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    gap: 25px;

    @media all and (max-width: 1025px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
    }
`

export const ButtonContainer = styled.div`
    margin-left: 25px;

    @media all and (max-width: 460px) {
        margin-left: 7px;
    }

    @media all and (max-width: 391px) {
        margin-left: 0;
        margin-top: 15px;
    }
`

export const Card = styled.button`
    padding: 10px;
    border-radius: 8px;
    box-shadow: var(--light-shadow);
    display: grid;
    grid-template-columns: 75px 1fr;
    gap: 10px;
    background-color: #f0f0f0;

    img {
        justify-self: center;
        border-radius: 500px;
    }

    p {
        align-self: center;
    }
`