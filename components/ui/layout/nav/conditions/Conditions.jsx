import { Layer, Container } from './Elements'
import withClickOutside from '@/hocs/withClickOutside'

const Conditions = ({ children, action }) => {
    return (
        <>
            <Layer id="outside" />
            <Container>
                <div dangerouslySetInnerHTML={{ __html: children }} />
            </Container>
        </>
    )
}

export default withClickOutside(Conditions)