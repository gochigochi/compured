import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from '@/components/buttons/primary/PrimaryButton'
import { PlusSvg, WhatsSvg } from '@/components/svgs/Svgs'
import { scaleOnView } from '@/components/common_elements/CommonVariants'
import { 
    Card, 
    Container,
    Title,
    Text,
    BtnText,
} from './Elements'
import { SectionTitle } from '@/components/common_elements/CommonElements'
import { services } from "./consts"

const Services = () => {
    return (
        <section id="servicios">
            <SectionTitle>Servicios Compured</SectionTitle>
            <Container>
                {
                    services.map(item => {
                        return (
                            <Card
                                variants={scaleOnView}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={item.bg}
                                    alt=""
                                    fill
                                    style={{ "objectFit": "cover", "zIndex": "-1" }}
                                />
                                <Title>{item.title}</Title>
                                <Text>{item.text}</Text>
                                <div>
                                        {
                                            item.isLink ?
                                            <Link href={item.url} style={{"display": "flex", "alignItems": "center"}}
                                            >
                                                <PrimaryButton>
                                                    <PlusSvg width="15px" height="15px" color="#fff"/>
                                                    <BtnText>Ver más</BtnText>
                                                </PrimaryButton>
                                            </Link> :
                                            <a 
                                                href="https://api.whatsapp.com/send?phone=5492944154964&text=Hola"
                                                rel="noopene noreferrer"
                                                target="_blank"
                                                style={{"display": "flex", "alignItems": "center"}}
                                            >
                                                <PrimaryButton>
                                                    <WhatsSvg width="12px" height="12px" color="#fff"/>
                                                    <BtnText>Contactanos</BtnText>
                                                </PrimaryButton>
                                            </a>
                                        }
                                </div>
                            </Card>
                        )
                    })
                }
            </Container>
        </section>
    )
}

export default Services