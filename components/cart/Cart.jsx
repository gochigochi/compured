import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCategoriesContext } from '@/context/CategoriesContext'
import { useCartContext } from '@/context/CartContext'
import { ContainerFluid, Inner, PageTitle } from '../common_elements/CommonElements'
import { CartContainer, EmptyCart, ItemList, SummaryContainer } from './Elements'
import Item from './item/Item'
import Summary from './summary/Summary'
import PrimaryButton from '../buttons/primary/PrimaryButton'

const Cart = ({ categs }) => {

    const { cart } = useCartContext()
    const { setCategories } = useCategoriesContext()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setCategories(categs)
        setLoading(false)
    }, [])

    if (loading) {
        return <>...</>
    }

    // ADD SKELETON UNTIL RENDER!!!
    if (cart.length === 0) {
        return(
        <ContainerFluid>
            <Inner>
                <EmptyCart>
                    <Image src="/assets/empty-cart.png" alt="" width={200} height={200} style={{"objectFit": "contain"}} />
                    <p>Todavía no agregaste nada al carrito</p>
                    <Link href="/">
                        <PrimaryButton>Ir a la tienda</PrimaryButton>
                    </Link>
                </EmptyCart>
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
                        <Summary />
                    </SummaryContainer>
                </CartContainer>
            </Inner>
        </ContainerFluid>
    )
}

export default Cart