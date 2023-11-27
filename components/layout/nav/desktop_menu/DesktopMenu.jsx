import FlayoutMenu from "@/components/falyout_menu/FlayoutMenu"
import { MenuContainer, MenuLink } from "./Elements"

const DesktopMenu = () => {
  return (
    <MenuContainer>
      <FlayoutMenu>Categorías</FlayoutMenu>
      <MenuLink href="/">Servicios</MenuLink>
      <MenuLink href="/">Contacto</MenuLink>
    </MenuContainer>
  )
}

export default DesktopMenu