import Image from 'next/image'
import { Card, Container } from './Elements'
import { scaleOnView } from '@/components/common_elements/CommonVariants'

const Services = () => {
    return (
        <Container>
            {
                [...Array(6).keys()].map(card => {
                    return (
                        <Card
                            variants={scaleOnView}
                            initial="initial"
                            whileInView="animate"
                        >
                            <Image
                                src="https://drive.google.com/uc?export=view&id=1RWrmnIYXnjlELzKr-D1mtbhAFOugZtc0"
                                alt=""
                                fill
                                style={{ "objectFit": "cover" }}
                            />
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default Services