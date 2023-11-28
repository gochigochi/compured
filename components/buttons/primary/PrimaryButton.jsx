import styled from "styled-components"

const Button = styled.button`
    background-color: ${({dis}) => dis ? "var(--dark-blue)" : "var(--blue)"};
    border-radius: 25px;
    padding: var(--button-padding);
    color: #fff;
    cursor: pointer;
`

const PrimaryButton = ({ children, onClick = () => {} }) => <Button onClick={onClick}>{children}</Button>

export default PrimaryButton