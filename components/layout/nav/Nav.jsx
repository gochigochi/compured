import Search from './search/Search'
import DesktopMenu from './desktop_menu/DesktopMenu'
import CartIcon from './cart_icon/CartIcon'
import {
    CartContainer,
    Container,
    Inner,
    Logo,
    LogoContainer,
} from './Elements'

const Nav = () => {
    return (
        <Container>
            <Inner>
                <LogoContainer href="/">
                    <Logo src="/assets/logo.png" alt="logo compured" fill priority />
                </LogoContainer>
                <DesktopMenu />
                <Search />
                <CartContainer href="/carrito">
                    <CartIcon />
                </CartContainer>
            </Inner>
        </Container>
    )
}

export default Nav