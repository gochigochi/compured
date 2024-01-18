import dynamic from "next/dynamic"
import { useState } from "react"
import withCategories from "@/hocs/withCategories"
import ProductSwiper from "../swipers/product_swiper/ProductSwiper"
import PaymentMethods from "./payment_methods/PaymentMethods"
// import ShippingCalculator from "./shipping_calculator/ShippingCalculator"
import ProductsSwiper from "../swipers/products_swiper/ProductsSwiper"
import { useCartContext } from "@/context/CartContext"
import { ContainerFluid, Inner } from "../common_elements/CommonElements"
import AddToCart from "../add_to_cart/AddToCart"
import Selector from "../add_to_cart/selector/Selector"
import {
    ProductMain,
    Title,
    Price,
    Description,
    // Details,
    Divider,
    ReturnTitle,
    ReturnNote,
} from "./Elements"

const DynToast = dynamic(() => import("../toast/Toast"), { ssr: false })

const ProductDetail = ({ product, categs, featured }) => {

    const { addItem } = useCartContext()
    const [qty, setQty] = useState(1)
    const [showToast, setShowToast] = useState(false)
    const [actionResponse, setActionResponse] = useState()

    const handleClick = () => {

        const res = addItem(product, qty)
        setShowToast(true)
        setActionResponse({ success: res.success, msg: res.msg })
    }

    return (
        <ContainerFluid bgcolor="#F9FAFB">
            <Inner>
                <ProductMain>
                    <div>
                        <ProductSwiper images={product.archivos} />
                    </div>
                    <div>
                        <Title>{product?.nombre}</Title>
                        <Price>${product?.preciofinal}</Price>
                        <Description>{product?.nombre}</Description>
                        <AddToCart>
                            <AddToCart.Selector stock={product.stockactual} setQty={setQty}>
                                <Selector.StockNote stock={product.productsStock} />
                            </AddToCart.Selector>
                            <AddToCart.AddBtn onClick={handleClick} state={showToast}>
                                Agregar al carrito
                            </AddToCart.AddBtn>
                        </AddToCart>
                        <Divider />
                        <PaymentMethods />
                        <Divider />
                            <ReturnTitle>Envíos</ReturnTitle>
                            <ReturnNote>Los envíos se coordinan una vez realizada la compra.</ReturnNote>
                        {/* <ShippingCalculator /> */}
                        <Divider />
                        <ReturnTitle>Devoluciones</ReturnTitle>
                        <ReturnNote>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</ReturnNote>
                    </div>
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

export default withCategories(ProductDetail)