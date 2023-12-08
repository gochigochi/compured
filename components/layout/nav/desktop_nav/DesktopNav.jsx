import { LogoContainer, Logo, CartContainer } from "../Elements"
import CartIcon from "../cart_icon/CartIcon"
import Search from "../search/Search"
import { Nav } from "./Elements"
import DesktopMenu from "./desktop_menu/DesktopMenu"

const DesktopNav = () => {
    return (
        <Nav>
            <LogoContainer href="/">
                <Logo src="/assets/logo.png" alt="logo compured" fill priority />
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