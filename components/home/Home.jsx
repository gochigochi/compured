import { useEffect } from 'react'
import { useCategoriesContext } from '@/context/CategoriesContext'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'
import { HomeContainer } from './Elements'
import BannerCarousel from '../banner_carousel/BannerCarousel'
import Featured from '../featured/Featured'

const Home = ({ children, products, categs }) => {

  const { setCategories } = useCategoriesContext()

  useEffect(() => setCategories(categs), [])

  return (
    <ContainerFluid>
        <Inner>
            <HomeContainer>
                <BannerCarousel />
                <Featured products={products} />
                { children }
            </HomeContainer>
        </Inner>
    </ContainerFluid>
  )
}

export default Home