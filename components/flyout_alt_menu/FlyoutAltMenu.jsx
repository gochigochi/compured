import Button from './button/Button'
import Menu from './menu/Menu'

const FlyoutAltMenu = ({ children }) => {
  return (
    <div>
        {children}
    </div>
  )
}

FlyoutAltMenu.Button = Button
FlyoutAltMenu.Menu = Menu

export default FlyoutAltMenu