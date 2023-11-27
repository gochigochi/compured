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
  return (
    <Container href={`/producto/${product.idproducto}`}>
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