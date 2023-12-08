import styled from "styled-components"

export const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--gray-bg);
    border-radius: 8px;
    padding: 25px;
    
    @media all and (max-width: 860px) {
        flex-direction: column-reverse;
        gap: 25px;
        align-items: flex-start;
    }
`

export const Text = styled.p`
    font-size: .9rem;
`

export const SocialIcons = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
`