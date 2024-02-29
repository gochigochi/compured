import { useState } from "react"
import FlyoutMenu from "@/components/flyout_menu/FlyoutMenu"
import FlyoutAltMenu from "@/components/flyout_alt_menu/FlyoutAltMenu"
import { ListSvg, OrderSvg } from "@/components/svgs/Svgs"

const Sort = ({ setDirection, categories }) => {

  const [open, setOpen] = useState()

  const handleClick = (direction) => {
    setOpen(!open)
    setDirection(direction)
  }

  return (
    <div className="w-full flex justify-between bg-custom-bg-gray rounded-full mb-4 md:mb-7 py-3 px-6 md:py-4 md:px-11">
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
              <div className="grid">
                <button className="block py-6 px-3" onClick={() => handleClick("up")}>Menor precio</button>
                <button className="block py-6 px-3" onClick={() => handleClick("down")}>Mayor precio</button>
              </div>
            </FlyoutAltMenu.Menu> : null
        }
      </FlyoutAltMenu>
    </div>
  )
}

export default Sort