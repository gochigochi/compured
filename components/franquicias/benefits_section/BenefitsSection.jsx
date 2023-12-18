import PopIn from '../../animations/PopIn'
import { SectionTitle } from '../../common_elements/CommonElements'
import { Bullet, Grid, Item } from './Elements'

const BenefitsSection = ({ title, content }) => {
    return (
        <section>
            <SectionTitle style={{"marginBottom": "35px"}}>{title}</SectionTitle>
            <Grid>
                {
                    content.map(item => {
                        return(
                            <PopIn key={item.id}>
                                <Item>
                                    <Bullet>{item.id}</Bullet>
                                    <p>{item.text}</p>
                                </Item>
                            </PopIn>
                        )
                    })
                }
            </Grid>
        </section>
    )
}

export default BenefitsSection