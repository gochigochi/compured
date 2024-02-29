import styled from "styled-components"

const Button = styled.button`
    cursor: ${({dis}) => dis ? "default" : "pointer"};
    color: var(--dark-blue)
`

const SecondaryButton = ({ children, onClick = () => {}, disabled = false }) => {
    return(
        <Button onClick={onClick} disabled={disabled} dis={disabled}>{children}</Button>
    )
}

export default SecondaryButton