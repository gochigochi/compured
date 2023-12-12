import { Card, Grid } from './Elements'

const Testimonials = ({ content }) => {
    return (
        <Grid>
            {
                content.map(item => {
                    return(
                        <Card>
                            hola
                        </Card>
                    )
                })
            }
        </Grid>
    )
}

export default Testimonials