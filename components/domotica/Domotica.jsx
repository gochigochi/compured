import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import withCategories from '@/hocs/withCategories'
import Banner from '../banner/Banner'
import { ContainerFluid, Inner, PageContainer } from '../common_elements/CommonElements'
import FeaturesSection from './features_section/FeaturesSection'
import PopIn from '../animations/PopIn'
import BenefitsSection from './benefits_section/BenefitsSection'
const DynTestimonialsSection = dynamic(() => import('./testimonials_section/TestimonialsSection'))
const DynContact = dynamic(() => import('../contact/Contact'))
const DynProjectsSection = dynamic(() => import('./projects_section/ProjectsSection'))

const Domotica = ({ categs }) => {

  const contactRef = useRef()
  const testimonialsRef = useRef()
  const projectsRef = useRef()
  const contactInView = useInView(contactRef, { once: true })
  const testimonialsInView = useInView(testimonialsRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true})


  return (
    <ContainerFluid>
      <Inner>
        <PageContainer>
          <PopIn>
            <Banner src="https://drive.google.com/uc?export=view&id=1mDw1YepwuSKyubLkSd40aiYvMUW0yGey">
              <Banner.Content>
                <Banner.SubTitle>Domótica</Banner.SubTitle>
                <Banner.Title>Transforma tu hogar en un espacio inteligente y sostenible</Banner.Title>
                <Banner.Text>Mejora la eficiencia energética, la comodidad y la seguridad en los hogares, brindando una experiencia de vida más conectada y conveniente</Banner.Text>
              </Banner.Content>
            </Banner>
          </PopIn>
          <FeaturesSection />
          <div ref={projectsRef}></div>
          <BenefitsSection />
          <div ref={testimonialsRef}></div>
          { projectsInView ? <DynProjectsSection /> : null }
          <div ref={contactRef}></div>
          { testimonialsInView ? <DynTestimonialsSection /> : null }
          { contactInView ? <DynContact /> : null }
        </PageContainer>
      </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Domotica)