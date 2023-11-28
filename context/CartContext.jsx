import { updateLocalStorage } from "@/utils/updateLocalStorage"
import { createContext, useContext, useState, useEffect } from "react"

const CartCtx = createContext()
export const useCartContext = () => useContext(CartCtx)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  // GET LOCAL STORAGE CART DATA IF ANY
  useEffect(() => {

    if (typeof window !== 'undefined' && localStorage.getItem("cart")) {
      
      const localCart = JSON.parse(localStorage.getItem("cart"))

      setCart(localCart)

    }
  }, [])


  // ADD ITEM TO CART
  const addItem = (item, qty) => {

    const index = cart.findIndex(i => i.id === item.idproducto)
    
    //IF NEW ITEM
    if (index === -1) {
      
      const cartItem = {
        id: item.idproducto,
        name: item.nombre,
        image: item.archivos[0].imagen,
        price: item.preciofinal,
        stock: item.stockactual,
        qty: qty,
      }
      
      const updatedCart = [...cart, cartItem]

      setCart(updatedCart)

      updateLocalStorage(updatedCart)

      return { success: true, msg: `Agregaste ${qty} producto/s al carrito` }
    }

    const newCart = [...cart]

    // IF QTY SELECTED IS MORE THAN STOCK
    if (newCart[index].qty === item.stockactual) {
      
      return { success: false, msg: "No hay más stock" }
    }
    
    // IF ITEM EXISTS UPDATE QTY
    newCart[index].qty += qty

    setCart(newCart)

    updateLocalStorage(newCart)

    return { success: true, msg: `Agregaste ${qty} producto/s al carrito` }
  }


  // REMOVE ITEM FROM CART
  const removeItem = (id) => {
    console.log("remove....", id)
  }

  // CLEAN CART
  const resetCart = (item) => {

  }

  return (
    <CartCtx.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartCtx.Provider>
  )
}

export default CartContextProvider