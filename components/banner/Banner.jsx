import { Container } from "./Elements"
import Image from 'next/image'

const Banner = () => {
  return (
    <Container>
        <Image src="/assets/banner-placeholder.png" alt="" fill style={{"objectFit": "cover"}} />
    </Container>
  )
}

export default Banner