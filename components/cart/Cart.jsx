import { ContainerFluid, Inner, PageTitle } from '../common_elements/CommonElements'
import { CartContainer, ItemList, SummaryContainer } from './Elements'

const Cart = () => {
  return (
    <ContainerFluid>
        <Inner>
            <PageTitle>Carrito</PageTitle>
            <CartContainer>
                <ItemList>
                    items
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