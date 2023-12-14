import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import FlayoutMenu from "@/components/flyout_menu/FlyoutMenu"
import { MenuContainer, MenuLink } from "./Elements"

const DesktopMenu = () => {

  const { pathname } = useRouter()
  const [isHome, setHome] = useState()

  useEffect(() => {
    pathname === "/" ? setHome(true) : setHome(false)
  }, [pathname])


  return (
    <MenuContainer>
      {
        isHome ?
          <>
            <FlayoutMenu>Categorías</FlayoutMenu>
            <MenuLink href="#servicios">Servicios</MenuLink>
            <MenuLink href="/">Contacto</MenuLink>
          </> : null
      }
    </MenuContainer>
  )
}

export default DesktopMenu