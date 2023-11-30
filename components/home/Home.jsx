import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCategoriesContext } from '@/context/CategoriesContext'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import { HomeContainer } from './Elements'
import BannerCarousel from '../banner_carousel/BannerCarousel'
import Featured from '../featured/Featured'

const DynServices = dynamic(() => import('./services/Services'))
const DynClients = dynamic(() => import('./clients/Clients'))

const Home = ({ children, products, categs }) => {

  const { setCategories } = useCategoriesContext()
  const clientsRef = useRef()
  const servicesRef = useRef()
  const clientsInView = useInView(clientsRef, { once: true })
  const servicesInView = useInView(servicesRef, { once: true })

  useEffect(() => setCategories(categs), [])

  return (
    <ContainerFluid>
        <Inner>
            <HomeContainer>
                <BannerCarousel />
                <Featured products={products} />
                <div ref={servicesRef}></div>
                { servicesInView ? <DynServices /> : null }
                <div ref={clientsRef}></div>
                { clientsInView ? <DynClients /> : null }
                { children }
            </HomeContainer>
        </Inner>
    </ContainerFluid>
  )
}

export default Home