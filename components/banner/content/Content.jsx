import { Container } from './Elements'

const Content = ({children, ...props}) => <Container {...props}>{children}</Container>

export default Content