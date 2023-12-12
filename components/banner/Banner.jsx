import { Container } from "./Elements"
import Image from 'next/image'
import Content from "./content/Content"
import Title from "./content/title/Title"
import Text from "./content/text/Text"
import SubTitle from "./content/subtitle/SubTitle"

const Banner = ({ children, src }) => {
  return (
    <Container>
      <Image src={src} alt="" fill style={{ "objectFit": "cover" }} />
      {children}
    </Container>
  )
}

Banner.Content = Content
Banner.Title = Title
Banner.Text = Text
Banner.SubTitle = SubTitle

export default Banner