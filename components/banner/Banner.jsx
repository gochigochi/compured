import Image from 'next/image'
import { isMobile } from 'react-device-detect'
import Content from "./content/Content"
import Title from "./content/title/Title"
import Text from "./content/text/Text"
import SubTitle from "./content/subtitle/SubTitle"
import { Container } from "./Elements"

const Banner = ({ children, mobileSrc, desktopSrc }) => {
  return (
    <Container>
      <Image src={isMobile ? mobileSrc : desktopSrc} alt="" fill style={{ "objectFit": "cover" }} />
      {children}
    </Container>
  )
}

Banner.Content = Content
Banner.Title = Title
Banner.Text = Text
Banner.SubTitle = SubTitle

export default Banner