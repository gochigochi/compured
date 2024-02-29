import { useCartContext } from '@/context/CartContext'
import { IconContainer, Badge } from './Elements'
// import { CartSvg } from '@/components/svgs/Svgs'

const CartIcon = () => {

    const { cartTotalItems } = useCartContext()

    return (
        <IconContainer>
            {/* <CartSvg /> */}
            <Badge>{cartTotalItems()}</Badge>
        </IconContainer>
    )
}

export default CartIcon