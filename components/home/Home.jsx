import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import withCategories from '@/hocs/withCategories'
import { HomeContainer } from './Elements'
import BannerCarousel from '../banner_carousel/BannerCarousel'
import Featured from '../featured/Featured'
import Services from './services/Services'
const DynClients = dynamic(() => import('./clients/Clients'))
const DynContact = dynamic(() => import('./contact/Contact'))

const Home = ({ products, categs }) => {

  const clientsRef = useRef()
  const contactRef = useRef()
  const clientsInView = useInView(clientsRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  return (
    <ContainerFluid>
        <Inner>
            <HomeContainer>
                <BannerCarousel />
                <Featured products={products} />
                <Services />
                <div ref={clientsRef}></div>
                { clientsInView ? <DynClients /> : null }
                <div ref={contactRef}></div>
                { contactInView ? <DynContact /> : null }
            </HomeContainer>
        </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Home)