import styled from "styled-components"

const Button = styled.button`
    background-color: ${({dis}) => dis ? "var(--dark-blue)" : "var(--blue)"};
    border-radius: 25px;
    padding: var(--button-padding);
    color: #fff;
    cursor: ${({dis}) => dis ? "default" : "pointer"} ;
`

const PrimaryButton = ({ children, onClick = () => {}, disabled = false }) => {
    return(
        <Button onClick={onClick} disabled={disabled} dis={disabled}>{children}</Button>
    )
}

export default PrimaryButton