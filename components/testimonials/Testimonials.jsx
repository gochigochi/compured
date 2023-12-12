import Image from 'next/image'
import { Author, Card, Grid } from './Elements'

const Testimonials = ({ content }) => {
    return (
        <Grid>
            {
                content.map(item => {
                    return(
                        <Card>
                            <p style={{"lineHeight": "1.3"}}>"{item.text}"</p>
                            <Author>
                                <Image src={item.src} alt="" width={80} height={80} />
                                <p>{item.name}</p>
                                <p style={{"fontWeight": "bold"}}>{item.prof}</p>
                            </Author>
                        </Card>
                    )
                })
            }
        </Grid>
    )
}

export default Testimonials