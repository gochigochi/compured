import { createContext, useContext, useState } from "react"

const CartCtx = createContext()
export const useCartContext = () => useContext(CartCtx)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (item, qty) => {

    console.log(item)

    const index = cart.findIndex(i => i.id === item.idproducto)
    const newCart = [...cart]

    //IF NEW ITEM
    if (index === -1) {

      const cartItem = {
        id: item.idproducto,
        image: item.archivos[0].imagen,
        price: item.preciofinal,
        stock: item.stockactual,
        qty: qty,
      }
  
      setCart([...cart, cartItem])
      return {success: true, msg: `Agregaste ${qty} producto/s al carrito`}
    }

    if (newCart[index].qty === item.stockactual) {

      return { success: false, msg: "No hay más stock" }
    }

    newCart[index].qty += qty

    setCart(newCart)
    return {success: true, msg: `Agregaste ${qty} producto/s al carrito`}
  }

  // console.log(cart)

  const removeItem = (item) => {

  }

  const resetCart = (item) => {

  }

  return (
    <CartCtx.Provider value={{ cart, addItem }}>
      {children}
    </CartCtx.Provider>
  )
}

export default CartContextProvider