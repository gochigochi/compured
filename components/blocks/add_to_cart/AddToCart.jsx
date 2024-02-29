import { ButtonsContainer } from "./Elements"
import AddBtn from "./add_btn/AddBtn"
import Selector from "./selector/Selector"

const AddToCart = ({ children, ...props }) => {
    return (
        <ButtonsContainer {...props}>
            {children}
        </ButtonsContainer>
    )
}

AddToCart.Selector = Selector
AddToCart.AddBtn = AddBtn

export default AddToCart