import styled from "styled-components"

const Button = styled.button`
    background-color: ${({dis}) => dis ? "var(--dark-blue)" : "var(--blue)"};
    border-radius: 25px;
    padding: var(--button-padding);
    color: #fff;
    cursor: ${({dis}) => dis ? "default" : "pointer"};
    transition: all .2s;
    min-height: 20px;
    min-width: 60px;
    display: flex;
    align-items: center;

    &:hover {
        ${({dis}) => !dis && "opacity: .8;"}
    }
`

const PrimaryButton = ( { children, onClick = () => {}, disabled = false, ...props}) => {
    return(
        <Button className="text-center" onClick={onClick} disabled={disabled} dis={disabled} {...props}>{children}</Button>
    )
}

export default PrimaryButton