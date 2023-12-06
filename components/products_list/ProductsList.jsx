import { useEffect, useState } from 'react'
import ProductCard from '../product_card/ProductCard'
import withCategories from '@/hocs/withCategories'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import { List, NoProducts } from './Elements'
import Sort from './sort/Sort'

const ProductsList = ({ products, categs }) => {

    const [sorted, setSorted] = useState(products)
    const [direction, setDirection] = useState("")

    useEffect(() => {

        switch (direction) {
            case "up":
                setSorted(products.sort((a, b) => Number(a.preciofinal) - Number(b.preciofinal)))
                break
            case "down":
                setSorted(products.sort((a, b) => Number(b.preciofinal) - Number(a.preciofinal)))
                break
            default:
                setSorted(products.sort())
        }

        // console.log(products)
        // console.log(sorted)
    }, [direction])

    if (products.length === 0) {
        return (
            <ContainerFluid>
                <NoProducts>No se encontraron products. Intente con términos más sencillos.</NoProducts>
            </ContainerFluid>
        )
    }

    return (
        <ContainerFluid>
            <Inner>
                <Sort setDirection={setDirection} />
                <List>
                    {
                        sorted?.map(product => {
                            return (
                                <ProductCard
                                    key={product.idproducto}
                                    product={product}
                                    style={{ "height": "330px" }}
                                />
                            )
                        })
                    }
                </List>
            </Inner>
        </ContainerFluid>
    )
}

export default withCategories(ProductsList)