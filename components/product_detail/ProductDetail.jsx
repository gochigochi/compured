import { useEffect, useState } from "react"
import { useCategoriesContext } from "@/context/CategoriesContext"
import PrimaryButton from "../buttons/primary/PrimaryButton"
import ProductSwiper from "../swipers/product_swiper/ProductSwiper"
import PaymentMethods from "./payment_methods/PaymentMethods"
import StoreNote from "./store_note/StoreNote"
import ShippingCalculator from "./shipping_calculator/ShippingCalculator"
import Selector from "./selector/Selector"
import { ContainerFluid, Inner } from "../common_elements/CommonElements"
import {
    ProductMain,
    Title,
    Price,
    Description,
    Details,
    ButtonsContainer,
    SelectorContainer,
    Divider,
    ReturnTitle,
    ReturnNote,
  } from "./Elements"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"

const ProductDetail = ({ product, categs, featured }) => {

    const { setCategories } = useCategoriesContext()
    const [qty, setQty] = useState(1)

    useEffect(() => setCategories(categs), [])

    const handleClick = () => {
        //Add to cart
        console.log(`Se agregó a carrito ${qty} ${product.nombre}`)
    }

    return (
        <ContainerFluid bgcolor="#F9FAFB">
            <Inner>
                <ProductMain>
                    <ProductSwiper images={product.archivos} />
                    <Details>
                        <Title>{product?.nombre}</Title>
                        <Price>${product?.preciofinal}</Price>
                        <Description>{product?.nombre}</Description>
                        <ButtonsContainer>
                            <SelectorContainer>
                                <span>Cantidad</span>
                                <Selector stock={product.stockactual} setQty={setQty} />
                                <StoreNote stock={product.productsStock} />
                            </SelectorContainer>
                            <PrimaryButton onClick={handleClick}>Agregar al carrito</PrimaryButton>
                        </ButtonsContainer>
                        <Divider />
                        <PaymentMethods />
                        <ShippingCalculator />
                        <Divider />
                        <ReturnTitle>Devoluciones</ReturnTitle>
                        <ReturnNote>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</ReturnNote>
                    </Details>
                </ProductMain>
                <ProductsSwiper products={featured} />
            </Inner>
        </ContainerFluid>
    )
}

export default ProductDetail