import { useState } from "react"
import FlyoutMenu from "@/components/flyout_menu/FlyoutMenu"
import FlyoutAltMenu from "@/components/flyout_alt_menu/FlyoutAltMenu"
import { ListSvg, OrderSvg } from "@/components/svgs/Svgs"
import { Container, List } from "./Elements"

const Sort = ({ setDirection, categories }) => {

  const [open, setOpen] = useState()

  const handleClick = (direction) => {
    setOpen(!open)
    setDirection(direction)
  }

  return (
    <Container>
      <FlyoutMenu position="left">
        <ListSvg width="24" height="24" color="var(--text-black)" />
      </FlyoutMenu>
      <FlyoutAltMenu>
        <FlyoutAltMenu.Button action={() => setOpen(!open)}>
          <OrderSvg width="22" height="22" color="var(--text-black)" />
        </FlyoutAltMenu.Button>
        {
          open ?
            <FlyoutAltMenu.Menu action={() => setOpen(!open)}>
              <List>
                <button onClick={() => handleClick("up")}>Menor precio</button>
                <button onClick={() => handleClick("down")}>Mayor precio</button>
              </List>
            </FlyoutAltMenu.Menu> : null
        }
      </FlyoutAltMenu>
    </Container>
  )
}

export default Sort