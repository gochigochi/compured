import { useCartContext } from "@/context/CartContext"
import {
  Box,
  Title,
  Item,
  Name,
  Total,
  CheckoutButton,
  TotalPrice,
  Subtotal,
} from "./Elements"
import Image from "next/image"
import { RightArrowSvg } from "@/components/svgs/Svgs"

const TEMP_SHIPPING = 3500

const Summary = ({ cart }) => {

  const { cartTotal } = useCartContext()

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
      <CheckoutButton onClick={() => cartTotal()}>
        Pagar
        <Image src="/assets/logos/mercado-pago.png" alt="" width={50} height={25} />
        <i><RightArrowSvg /></i>
      </CheckoutButton>
    </Box>
  )
}

export default Summary