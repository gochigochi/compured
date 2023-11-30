import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { useCategoriesContext } from "@/context/CategoriesContext"
import PrimaryButton from "../buttons/primary/PrimaryButton"
import ProductSwiper from "../swipers/product_swiper/ProductSwiper"
import PaymentMethods from "./payment_methods/PaymentMethods"
import StoreNote from "./store_note/StoreNote"
import ShippingCalculator from "./shipping_calculator/ShippingCalculator"
import Selector from "./selector/Selector"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"
import { useCartContext } from "@/context/CartContext"
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

// import Toast from "../toast/Toast"
const DynToast = dynamic(() => import("../toast/Toast"), { ssr: false })

const ProductDetail = ({ product, categs, featured }) => {

    const { setCategories } = useCategoriesContext()
    const { addItem } = useCartContext()
    const [qty, setQty] = useState(1)
    const [showToast, setShowToast] = useState(false)
    const [actionResponse, setActionResponse] = useState()

    useEffect(() => setCategories(categs), [])

    const handleClick = () => {

        const res = addItem(product, qty)
        setShowToast(true)
        setActionResponse({ success: res.success, msg: res.msg })
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
                            <PrimaryButton onClick={handleClick} disabled={showToast}>Agregar al carrito</PrimaryButton>
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
            {
                showToast ?
                <DynToast
                    msg={actionResponse.msg}
                    success={actionResponse.success}
                    time={2500}
                    setShowToast={setShowToast}
                /> : 
                null
            }
        </ContainerFluid>
    )
}

export default ProductDetail