import { SectionTitle } from '@/components/common_elements/CommonElements'
import { Grid, Author, Card } from "./Elements"
import Image from 'next/image'
import PopIn from '@/components/animations/PopIn'

const temp = [
    {
        id: 1,
        name: "Satya Nadella",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 2,
        name: "Tim Cook",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        id: 3,
        name: "Sundar Pichai",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]

const Testimonials = () => {
    return (
        <section>
            <SectionTitle style={{"marginBottom": "15px"}}>Testimonios</SectionTitle>
            <Grid>
                {
                    temp.map(item => {
                        return(
                            <PopIn>
                                <Card key={item.id}>
                                    <Image src="https://drive.google.com/uc?export=view&id=1jnnCvhTlfTgKDSdVTXz9qcybPXEQgJA9" alt="" width={35} height={35} />
                                    <p>{item.text}</p>
                                    <Author><p>{item.name}</p></Author>
                                </Card>
                            </PopIn>
                        )
                    })
                }
            </Grid>
        </section>
    )
}

export default Testimonials