import { MenuContainer, Layer, MenuItem } from "./Elements"
import withClickOutside from '@/hocs/withClickOutside'

const Menu = ({ children, action }) => {
    return (
        <>
            <Layer id="outside"/>
            <MenuContainer>
                {children}
            </MenuContainer>
        </>
    )
}

export default withClickOutside(Menu)