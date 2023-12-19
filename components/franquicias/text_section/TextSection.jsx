import { SectionContainer, SectionTitle } from '@/components/common_elements/CommonElements'
import { ImageContainer, Inner, Left, Right } from './Elements'
import Image from 'next/image'
import Scalable from '@/components/animations/Scalable'

const TextSection = () => {
  return (
    <Scalable>
        <SectionContainer>
            <Inner>
                <Left>
                    <SectionTitle>Oportunidades del sector</SectionTitle>
                    <p>De acuerdo con una investigación del Instituto de Investigación de Capgemini, el 39% tiene previsto aumentar la inversión en tecnología en los próximos 12-18 meses, y una proporción similar tiene previsto mantenerla.</p>
                    <p>Cada vez más personas quieren digitalizar sus hogares. Desde Statista estimaron que la penetración de los sistemas de domótica en los hogares fue del 15% en 2022 y se espera que alcance el 41,7% para 2027.</p>
                    <p>El 52% de las pymes del país planea invertir más en su transformación digital.</p>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image src="https://drive.google.com/uc?export=view&id=1pLHWlLYGyQqJJ4AhD-r0t9bW1rTQrEYl" alt="" fill />
                    </ImageContainer>
                </Right>
            </Inner>
        </SectionContainer>
    </Scalable>
  )
}

export default TextSection