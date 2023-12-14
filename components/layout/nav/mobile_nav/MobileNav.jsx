import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import FlyoutAltMenu from '@/components/flyout_alt_menu/FlyoutAltMenu'
import Search from "../search/Search"
import CartIcon from "../cart_icon/CartIcon"
import { LogoContainer, Logo } from '../Elements'
import { Nav, NavItem, NavItems } from './Elements'
import { MenuSvg, SearchSvg } from '@/components/svgs/Svgs'

const menuContentHome = [
    {
        id: 1,
        title: "Categorías",
        url: "/categorias",
        link: true
    }, 
    {
        id: 2,
        title: "Servicios",
        url: "#servicios",
        link: false
    },
    {
        id: 3,
        title: "Contacto",
        url: "#contacto",
        link: false
    },
]

const menuContentAlt = [
    {
        id: 1,
        title: "Categorías",
        url: "/categorias",
        link: true
    }
]

const MobileNav = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)
    const { pathname } = useRouter()

    const menuContent = pathname === "/" ? menuContentHome : menuContentAlt

    useEffect(() => {
        openMenu && setOpenMenu(false)
        openSearch && setOpenSearch(false)
    }, [pathname])

    return (
        <Nav>
            <LogoContainer href="/">
                <Logo src="https://drive.google.com/uc?export=view&id=1BLm0zCbENDbmXD4BNX7myU_eDjGXuMG8" alt="logo compured" fill priority />
            </LogoContainer>
            <NavItems>
                <NavItem>
                    <FlyoutAltMenu>
                        <FlyoutAltMenu.Button 
                            style={{"display": "grid", "placeItems": "center"}}
                            action={() => setOpenMenu(!openMenu)}
                        >
                            <MenuSvg width="30" height="30" color="var(--text-black)" />
                        </FlyoutAltMenu.Button>
                        {
                            openMenu ?
                            <FlyoutAltMenu.Menu action={() => setOpenMenu(!openMenu)}>
                                <FlyoutAltMenu.List content={menuContent} />
                            </FlyoutAltMenu.Menu> : null
                        }
                    </FlyoutAltMenu>
                </NavItem>
                <NavItem>
                    <FlyoutAltMenu>
                        <FlyoutAltMenu.Button 
                            style={{"display": "grid", "placeItems": "center"}}
                            action={() => setOpenSearch(!openSearch)}
                        >
                            <SearchSvg width="27" height="27" color="var(--text-black)" />
                        </FlyoutAltMenu.Button>
                        {
                            openSearch ?
                            <FlyoutAltMenu.Menu action={() => setOpenSearch(!openSearch)}>
                                <Search />
                            </FlyoutAltMenu.Menu> : null
                        }
                    </FlyoutAltMenu>
                </NavItem>
                <NavItem>
                    <Link href="/carrito">
                        <CartIcon />
                    </Link>
                </NavItem>
            </NavItems>
        </Nav>
    )
}

export default MobileNav