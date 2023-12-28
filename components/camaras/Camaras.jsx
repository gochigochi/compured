import dynamic from "next/dynamic"
import { useInView } from "framer-motion"
import { useRef } from "react"
import withCategories from "@/hocs/withCategories"
import { ContainerFluid, Inner, PageContainer } from "../common_elements/CommonElements"
import Features from "./features/Features"
import Hero from "./hero/Hero"
import Process from "./process/Process"
import TestimonialsSection from "./testimonials_section/Testimonials"
const DynContact = dynamic(() => import("../contact/Contact"))

const Camaras = () => {

  const contactRef = useRef()
  const contactInView = useInView(contactRef, { once: true })

  return (
    <ContainerFluid>
      <Inner>
        <PageContainer>
          <Hero
            mobileSrc="https://drive.google.com/uc?export=view&id=1hSrGZV-hiB-sxLetV9347HlAikwvQSeA"
            desktopSrc="https://drive.google.com/uc?export=view&id=1hSrGZV-hiB-sxLetV9347HlAikwvQSeA"
          />
          <Features />
          <Process />
          <div ref={contactRef}></div>
          <TestimonialsSection />
          {contactInView ? <DynContact /> : null}
        </PageContainer>
      </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Camaras)