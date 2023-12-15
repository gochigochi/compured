import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import withCategories from '@/hocs/withCategories'
import { ContainerFluid, Inner, PageContainer } from '../common_elements/CommonElements'
import Hero from './hero/Hero'
import FeaturesSection from './features_section/FeaturesSection'
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
  const projectsInView = useInView(projectsRef, { once: true })

  return (
    <ContainerFluid>
      <Inner>
        <PageContainer>
          <Hero
            mobileSrc="https://drive.google.com/uc?export=view&id=1H9enCaOdWNduTygI4WrHaI1k0wPBtJaX"
            desktopSrc="https://drive.google.com/uc?export=view&id=1T-3gk-cd4XtozmLc3UPM6UOU_KepJGpO"
          />
          <FeaturesSection />
          <div ref={projectsRef}></div>
          <BenefitsSection />
          <div ref={testimonialsRef}></div>
          {projectsInView ? <DynProjectsSection /> : null}
          <div ref={contactRef}></div>
          {testimonialsInView ? <DynTestimonialsSection /> : null}
          {contactInView ? <DynContact /> : null}
        </PageContainer>
      </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Domotica)