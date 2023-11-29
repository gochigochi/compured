import { useEffect } from 'react'
import { useCategoriesContext } from '@/context/CategoriesContext'
import ProductCard from '../product_card/ProductCard'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import { List, NoProducts } from './Elements'

const ProductsList = ({ products, categs }) => {

    const { setCategories } = useCategoriesContext()

    useEffect(() => setCategories(categs), [])

    if (products.length === 0) {
        return(
            <ContainerFluid>
                <NoProducts>No se encontraron products. Intente con términos más sencillos.</NoProducts>
            </ContainerFluid>
        )
    }

    return (
        <ContainerFluid>
            <Inner>
                <List>
                    {
                        products?.map(product => {
                            return <ProductCard key={product.idproducto} product={product} />
                        })
                    }
                </List>
            </Inner>
        </ContainerFluid>
    )
}

export default ProductsList