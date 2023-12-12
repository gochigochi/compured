import Button from './button/Button'
import Menu from './menu/Menu'
import List from './list/List'

const FlyoutAltMenu = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  )
}

FlyoutAltMenu.Button = Button
FlyoutAltMenu.Menu = Menu
FlyoutAltMenu.List = List

export default FlyoutAltMenu