import { Container } from "./Elements"
import Image from 'next/image'

const Banner = ({ src }) => {
  return (
    <Container>
        <Image src={src} alt="" fill style={{"objectFit": "cover"}} />
    </Container>
  )
}

export default Banner