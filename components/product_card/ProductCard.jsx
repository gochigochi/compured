import { useRouter } from "next/router"
import { toUrl } from "@/utils/toUrl"
import { 
    Container,
    Top,
    Bottom,
    Img,
    Price,
    Title,
    Text,
} from "./Elements"

const ProductCard = ({ product }) => {

  const router = useRouter()

  const handleRouter = (name, id) => {
    const friendlyUrl = toUrl(name)
    router.push(`/producto/${id}`, `/producto/id=${id}&${friendlyUrl}`)
  }

  return (
    <Container onClick={() => handleRouter(product.nombre, product.idproducto)}>
        <Top>
            <Img src={product.imagen_url} alt={product.nombre} fill />
        </Top>
        <Bottom>
            <Title>{product.nombre}</Title>
            <Price>${product.preciofinal}</Price>
            <Text>{product.nombre}</Text>
        </Bottom>
    </Container>
  )
}

export default ProductCard