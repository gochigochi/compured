import styled from "styled-components"

export const Form = styled.form`
    position: relative;
    width: 100%;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const InputContainer = styled.div`
    position: relative;
    display: grid;
`

export const Input = styled.input`
    border: 1px solid var(--input-border);
    border-radius: 8px;
    padding: 15px 0 15px 15px;
`

export const TextArea = styled.textarea`
    border: 1px solid var(--input-border);
    border-radius: 8px;
    padding: 15px;
`

export const GeneralError = styled.p`
    color: var(--alert);
`

export const ButtonArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`