import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import FlayoutMenu from "@/components/flyout_menu/FlyoutMenu"
import { MenuContainer, MenuLink } from "./Elements"
import FlyoutAltMenu from "@/components/flyout_alt_menu/FlyoutAltMenu"
import Link from "next/link"

const links = [
  { id: 1, title: "Home", url: "/", link: true },
  { id: 2, title: "Domotica", url: "/domotica", link: true },
  { id: 3, title: "Franquicias", url: "/franquicias", link: true },
  { id: 3, title: "Seguridad", url: "/camaras", link: true },
]

const DesktopMenu = () => {

  const { pathname } = useRouter()
  const [isHome, setHome] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    pathname === "/" ? setHome(true) : setHome(false)
    setOpen(false)
  }, [pathname])

  const HomeMenu = () => {
    return (
      <>
        <MenuLink href="#servicios">Servicios</MenuLink>
        <MenuLink href="#contacto">Contacto</MenuLink>
      </>
    )
  }

  const AltMenu = () => {
    return(
      <FlyoutAltMenu>
        <FlyoutAltMenu.Button action={() => setOpen(!open)}>
          Servicios
        </FlyoutAltMenu.Button>
        {
          open ?
            <FlyoutAltMenu.Menu action={() => setOpen(!open)}>
              <FlyoutAltMenu.List content={links} />
            </FlyoutAltMenu.Menu> : null
        }
      </FlyoutAltMenu>
    )
  }

  return (
    <MenuContainer>
      <FlayoutMenu>Categorías</FlayoutMenu>
      {
        isHome ? <HomeMenu /> : <AltMenu />
      }
    </MenuContainer>
  )
}

export default DesktopMenu