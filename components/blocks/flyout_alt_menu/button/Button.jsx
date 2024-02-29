import { BtnContainer } from './Elements'

const Button = ({ children, id, action, ...props }) => {
  return (
    <BtnContainer onClick={action} id={id} {...props}>
        {children}
    </BtnContainer>
  )
}

export default Button