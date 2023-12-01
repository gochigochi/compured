import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCategoriesContext } from '@/context/CategoriesContext'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import { HomeContainer } from './Elements'
import BannerCarousel from '../banner_carousel/BannerCarousel'
import Featured from '../featured/Featured'
import Services from './services/Services'
const DynClients = dynamic(() => import('./clients/Clients'))
const DynContact = dynamic(() => import('./contact/Contact'))

const Home = ({ products, categs }) => {

  const { setCategories } = useCategoriesContext()
  const clientsRef = useRef()
  const contactRef = useRef()
  const clientsInView = useInView(clientsRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  useEffect(() => setCategories(categs), [])

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

export default Home