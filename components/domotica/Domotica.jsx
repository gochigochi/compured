import withCategories from '@/hocs/withCategories'
import Banner from '../banner/Banner'
import { ContainerFluid, Inner } from '../common_elements/CommonElements'

const Domotica = ({ categs }) => {
  return (
    <ContainerFluid>
        <Inner>
            <Banner src="/assets/banner-placeholder.png" />
        </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Domotica)