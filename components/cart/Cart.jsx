import { useEffect } from 'react'
import { useCategoriesContext } from '@/context/CategoriesContext'
import { useCartContext } from '@/context/CartContext'
import { ContainerFluid, Inner, PageTitle } from '../common_elements/CommonElements'
import { CartContainer, EmptyCart, ItemList, SummaryContainer } from './Elements'
import Item from './item/Item'
import Summary from './summary/Summary'

const Cart = ({ categs }) => {

    const { cart } = useCartContext()
    const { setCategories } = useCategoriesContext()

    useEffect(() => setCategories(categs), [])

    if (cart.length === 0) {
        return(
        <ContainerFluid>
            <Inner>
                <EmptyCart>No hay nada en el carrito</EmptyCart>
            </Inner>
        </ContainerFluid>)
    }

    return (
        <ContainerFluid>
            <Inner>
                <PageTitle>Carrito</PageTitle>
                <CartContainer>
                    <ItemList>
                        {
                            cart.map(item => <Item key={item.id} item={item} />)
                        }
                    </ItemList>
                    <SummaryContainer>
                        <Summary cart={cart} />
                    </SummaryContainer>
                </CartContainer>
            </Inner>
        </ContainerFluid>
    )
}

export default Cart