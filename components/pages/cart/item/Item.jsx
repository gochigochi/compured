import Image from "next/image"
import { useCartContext } from "@/context/CartContext"
import SecondaryButton from "@/components/buttons/secondary/SecondaryButton"
import {
    Container,
    ImageContainer,
    Details,
    Title,
    Price,
    Qty,
} from "./Elements"

const Item = ({ item }) => {

    const { removeItem } = useCartContext()

    return (
        <Container>
            <ImageContainer>
                <Image src={item.image} alt="" width={100} height={100} style={{"objectFit": "contain"}} />
            </ImageContainer>
            <Details>
                <Title>{item.name}</Title>
                <Price>${item.price}</Price>
                <Qty>x {item.qty}</Qty>
                <SecondaryButton onClick={() => removeItem(item.id)}>
                    Quitar
                </SecondaryButton>
            </Details>
        </Container>
    )
}

export default Item