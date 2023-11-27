import { useEffect } from 'react'
import { useCategoriesContext } from '@/context/CategoriesContext'
import ProductCard from '../product_card/ProductCard'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import { List } from './Elements'

const ProductsList = ({ products, categs }) => {

    const { setCategories } = useCategoriesContext()

    useEffect(() => setCategories(categs), [])

    return (
        <ContainerFluid>
            <Inner>
                <List>
                    {
                        products?.map(product => {
                            return <ProductCard product={product} />
                        })
                    }
                </List>
            </Inner>
        </ContainerFluid>
    )
}

export default ProductsList