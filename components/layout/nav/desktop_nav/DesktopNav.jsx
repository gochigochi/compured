import { LogoContainer, Logo, CartContainer } from "../Elements"
import DesktopMenu from "./desktop_menu/DesktopMenu"
import CartIcon from "../cart_icon/CartIcon"
import Search from "../search/Search"
import { Nav } from "./Elements"

const DesktopNav = () => {

    return (
        <Nav>
            <LogoContainer href="/">
                <Logo src="https://drive.google.com/uc?export=view&id=1BLm0zCbENDbmXD4BNX7myU_eDjGXuMG8 " alt="logo compured" fill priority />
            </LogoContainer>
            <DesktopMenu />
            <Search />
            <CartContainer href="/carrito">
                <CartIcon />
            </CartContainer>
        </Nav>
    )
}

export default DesktopNav