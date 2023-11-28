import { useCartContext } from '@/context/CartContext'
import { ContainerFluid, Inner, PageTitle } from '../common_elements/CommonElements'
import { CartContainer, ItemList, SummaryContainer } from './Elements'
import Item from './item/Item'

const Cart = () => {

    const { cart } = useCartContext()

    return (
        <ContainerFluid>
            <Inner>
                <PageTitle>Carrito</PageTitle>
                <CartContainer>
                    <ItemList>
                        {
                            cart.map(item => <Item item={item} />)
                        }
                    </ItemList>
                    <SummaryContainer>
                        resumen
                    </SummaryContainer>
                </CartContainer>
            </Inner>
        </ContainerFluid>
    )
}

export default Cart