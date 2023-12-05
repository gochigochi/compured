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
  Stock,
} from "./Elements"

const ProductCard = ({ product, ...props }) => {

  const router = useRouter()
  const available = product.stockactual > 0

  const handleRouter = (name, id) => {
    const friendlyUrl = toUrl(name)
    router.push(`/producto/${id}`, `/producto/id=${id}&${friendlyUrl}`)
  }

  return (
    <Container onClick={() => handleRouter(product.nombre, product.idproducto)} {...props} >
      <Top>
        <Img
          src={!!product.imagen_url ? product.imagen_url : "/assets/placeholder-logo.png"}
          alt={product.nombre}
          fill
        />
      </Top>
      <Bottom>
        <Title>{product.nombre}</Title>
        <Price available={available}>
          ${product.preciofinal}
          {!available ? <Stock>Sin stock</Stock> : null}
        </Price>
        <Text>{product.nombre}</Text>
      </Bottom>
    </Container>
  )
}

export default ProductCard