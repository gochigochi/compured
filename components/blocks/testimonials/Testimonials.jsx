import Image from 'next/image'
import { Author, Card, Grid } from './Elements'
import PopIn from '../animations/PopIn'

const Testimonials = ({ content }) => {
    return (
        <Grid>
            {
                content.map(item => {
                    return(
                        <PopIn key={item.id}>
                            <Card>
                                <p style={{"lineHeight": "1.3"}}>"{item.text}"</p>
                                <Author>
                                    <Image src={item.src} alt="" width={80} height={80} />
                                    <p>{item.name}</p>
                                    <p style={{"fontWeight": "bold"}}>{item.prof}</p>
                                </Author>
                            </Card>
                        </PopIn>
                    )
                })
            }
        </Grid>
    )
}

export default Testimonials