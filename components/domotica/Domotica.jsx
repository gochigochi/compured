import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import withCategories from '@/hocs/withCategories'
import Banner from '../banner/Banner'
import { ContainerFluid, Inner, PageContainer } from '../common_elements/CommonElements'
import TestimonialsSection from './testimonials_section/TestimonialsSection'
const DynContact = dynamic(() => import('../contact/Contact'))

const Domotica = ({ categs }) => {

  const contactRef = useRef()
  const contactInView = useInView(contactRef, { once: true })

  return (
    <ContainerFluid>
      <Inner>
        <PageContainer>
          <Banner src="/assets/banner-placeholder-page.png">
            <Banner.Content>
              <Banner.SubTitle>Domótica</Banner.SubTitle>
              <Banner.Title>Transforma tu hogar en un espacio inteligente y sostenible</Banner.Title>
              <Banner.Text>Mejora la eficiencia energética, la comodidad y la seguridad en los hogares, brindando una experiencia de vida más conectada y conveniente</Banner.Text>
            </Banner.Content>
          </Banner>
          <div ref={contactRef}></div>
          <TestimonialsSection />
          { contactInView ? <DynContact /> : null }
        </PageContainer>
      </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Domotica)