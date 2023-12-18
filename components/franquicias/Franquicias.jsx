import dynamic from "next/dynamic"
import { useRef } from "react"
import { useInView } from "framer-motion"
import withCategories from "@/hocs/withCategories"
import Faqs from "./faqs/Faqs"
import Hero from "./hero/Hero"
import BenefitsSection from "./benefits_section/BenefitsSection"
import TextSection from "./text_section/TextSection"
import { ContainerFluid, Inner, PageContainer } from "../common_elements/CommonElements"
const DynProcess = dynamic(() => import("./process/Process"))
const DynContact = dynamic(() => import("../contact/Contact"))

const benefits = [
  {
    id: 1,
    text: "Respaldo de una marca establecida con más de 23 años en el mercado",
  },
  {
    id: 2,
    text: "Entrenamiento y soporte continuo para los franquiciados.",
  },
  {
    id: 3,
    text: "Amplia gama de productos disponibles para la venta, incluyendo computadoras, notebooks, impresoras y sistemas de domótica."
  },
  {
    id: 4,
    text: "Servicio técnico especializado para brindar asistencia a los clientes."
  },
  {
    id: 5,
    text: "Oportunidad de formar parte de un negocio en crecimiento con un modelo probado.",
  },
  {
    id: 6,
    text: "Amplio conocimiento del mercado, proveedores, logística y precios."
  }
]

const Franquicias = () => {

  const contactRef = useRef()
  const processRef = useRef()
  const contactInView = useInView(contactRef, { once: true })
  const processInView = useInView(processRef, { once: true })

  return (
    <ContainerFluid>
      <Inner>
        <PageContainer>
          <Hero
            mobileSrc="https://drive.google.com/uc?export=view&id=1szP1trZlVk-t7A9h7uUPuxpuMweXfw5a"
            desktopSrc="https://drive.google.com/uc?export=view&id=1szP1trZlVk-t7A9h7uUPuxpuMweXfw5a"
          />
          <BenefitsSection title="Beneficios de invertir" content={benefits} />
          <div ref={processRef}></div>
          <TextSection />
          <div ref={contactRef}></div>
          {processInView ? <DynProcess /> : null}
          <Faqs />
          {contactInView ? <DynContact /> : null}
        </PageContainer>
      </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Franquicias)