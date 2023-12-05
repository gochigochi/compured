import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { useCartContext } from "@/context/CartContext"
import { customFetch } from "@/utils/customFetch"
import {
  Box,
  Title,
  Item,
  Name,
  Total,
  CheckoutButtonContainer,
  TotalPrice,
  Subtotal,
} from "./Elements"
const DynMpCheckoutBtn = dynamic(() => import("@/components/mp_checkout_btn/MpCheckoutBtn"), { ssr: false })

const TEMP_SHIPPING = 3500

const Summary = () => {

  const { cart, cartTotal } = useCartContext()
  const [loading, setLoading] = useState(false)
  const [preferenceId, setPreferenceId] = useState(null)

  useEffect(() => {

    const preparePayment = async () => {

      const productsData = cart.map(product => ({ id: product.id, qty: product.qty }))

      const response = await customFetch("/api/mp-create-preference", { productsData: productsData })

      if (response.error) {
        console.log("OCURRIO UN ERROR")
      }

      setPreferenceId(response.id)
    }

    preparePayment()

  }, [cart])

  return (
    <Box>
      <Title>Resumen de la compra</Title>
      {
        cart.map(item => {
          return (
            <Item key={item.id}>
              <Name>{item.name} <span>(x{item.qty})</span></Name>
              <p>${item.subtotal}</p>
            </Item>
          )
        })
      }
      <Item>
        <Subtotal>Subtotal</Subtotal>
        <Subtotal>${cartTotal()}</Subtotal>
      </Item>
      <Item>
        <Name>Envío</Name>
        <p>${TEMP_SHIPPING}</p>
      </Item>
      <Total>
        <p>Total</p>
        <TotalPrice>${cartTotal(TEMP_SHIPPING)}</TotalPrice>
      </Total>
      {
        preferenceId ?
        <CheckoutButtonContainer loading={loading}>
          <DynMpCheckoutBtn preferenceId={preferenceId} />
        </CheckoutButtonContainer> : null
      }
    </Box>
  )
}

export default Summary