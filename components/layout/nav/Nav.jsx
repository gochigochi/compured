import Search from './search/Search'
import DesktopMenu from './desktop_menu/DesktopMenu'
import {
    CartContainer,
    Container,
    Inner,
    Logo,
    LogoContainer,
} from './Elements'
import { CartSvg } from '@/components/svgs/Svgs'

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
                    <CartSvg />
                </CartContainer>
            </Inner>
        </Container>
    )
}

export default Nav