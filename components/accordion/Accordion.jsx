import { Container } from "./Elements"
import Item from "./item/Item"
import Body from "./item/body/Body"
import Header from "./item/header/Header"

const Accordion = ({ children, ...props }) => {
    return (
        <Container {...props}>
            {children}
            <input type="radio" name="accordion" id="acc-close" />
        </Container>
    )
}


Accordion.Item = Item
Accordion.ItemHeader = Header
Accordion.ItemBody = Body

export default Accordion