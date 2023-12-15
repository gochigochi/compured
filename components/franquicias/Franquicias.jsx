import withCategories from "@/hocs/withCategories"
import { ContainerFluid, Inner, PageContainer } from "../common_elements/CommonElements"

const Franquicias = () => {
  return (
    <ContainerFluid>
        <Inner>
            <PageContainer>
                Franquicias
            </PageContainer>
        </Inner>
    </ContainerFluid>
  )
}

export default withCategories(Franquicias)