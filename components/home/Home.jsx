import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ContainerFluid, Inner, PageContainer } from '../common_elements/CommonElements'
import withCategories from '@/hocs/withCategories'
import BannerCarousel from '../banner_carousel/BannerCarousel'
import Featured from '../featured/Featured'
import Services from './services/Services'
import Categories from './categories/Categories'
const DynClients = dynamic(() => import('./clients/Clients'))
const DynContact = dynamic(() => import('../contact/Contact'))

const Home = ({ products, categs }) => {

  const clientsRef = useRef()
  const contactRef = useRef()
  const clientsInView = useInView(clientsRef, { once: true })
  const contactInView = useInView(contactRef, { once: true })

  return (
    <ContainerFluid>
        <Inner>
            <PageContainer>
                <BannerCarousel />
                <Featured products={products} />
                <Categories categs={categs} />
                <div ref={clientsRef}></div>
                <Services />
                <div ref={contactRef}></div>
                { clientsInView ? <DynClients /> : null }
                { contactInView ? <DynContact /> : null }
            </PageContainer>
        </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Home)