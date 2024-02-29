import ProductCard from '../product_card/ProductCard'
import withCategories from '@/hocs/withCategories'
import Sort from './sort/Sort'
import useSort from '@/hooks/useSort'

const ProductsList = ({ products, categs }) => {

    const { sorted, setDirection } = useSort(products, "preciofinal")

    if (products.length === 0) {
        return (
            <div className="section-inner">
                <div className="w-full h-[80svh] md:h-[80vh] grid items-center">
                    <p className="text-center">No se encontraron products. Intente con términos más sencillos.</p>
                </div>
            </div>
        )
    }

    return (
        <section className="section-fluid">
            <div className="section-inner">
                <Sort setDirection={setDirection} categories={categs} />
                <div className="product-grid">
                    {
                        sorted?.map(product => {
                            return (
                                <div key={product.idproducto}>
                                    <ProductCard
                                        product={product}
                                        style={{ "height": "330px" }}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default withCategories(ProductsList)