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

const temp = [
    {
        title: "Servicio Técnico",
        text: "Sabemos la importancia de la tecnología en la vida diaria de todas las personas. Asesoramos y solucionamos lo que los clientes necesiten, en materia de servicio técnico.",
        isContact: true,
        bg: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
    },
    {
        title: "Domótica",
        text: "Transforma tu hogar en un espacio inteligente, controlando luces, seguridad, climatización y más. Descubre el futuro de tu hogar hoy mismo",
        isLink: true,
        url: "#",
        bg: "https://drive.google.com/uc?export=view&id=1RWrmnIYXnjlELzKr-D1mtbhAFOugZtc0",
    },
    {
        title: "Cámaras de seguridad",
        text: "Protege lo que más quieres con nuestras cámaras de seguridad. Mantén tu hogar o negocio seguro las 24 horas del día. Contamos con instalación profesional y equipos de alta calidad.",
        isLink: true,
        url: "#",
        bg: "https://drive.google.com/uc?export=view&id=1mKJ2PtGtUsBd1w7yPJv6szaLBImfQxpD",
    },
    {
        title: "Sustentabilidad",
        text: "Nuestro compromiso con el mundo es parte fundamental del propósito de la empresa. Conoce nuestro impacto ambiental y social.",
        isContact: true,
        bg: "https://drive.google.com/uc?export=view&id=16ZAEQQR6OXiB_kRfL2T-wQA_DPr1393j",
    },
    {
        title: "Franquicias",
        text: "Tecnología y Sustentabilidad son los componentes con mayor crecimiento a nivel mundial. CompuRed cuenta con ambos. ¿Querés conocer nuestro plan de expansión?",
        isLink: true,
        url: "#",
        bg: "https://drive.google.com/uc?export=view&id=1T2RFBAJVUhqfZBaRg04tWWRl5uu1Oq5T",
    },
    {
        title: "Ecommerce",
        text: "Conocé nuestros productos en nuestro comercio online",
        isLink: true,
        url: "#",
        bg: "https://drive.google.com/uc?export=view&id=1T2RFBAJVUhqfZBaRg04tWWRl5uu1Oq5T",
    },
]

const Services = () => {
    return (
        <Container>
            {
                temp.map(item => {
                    return (
                        <Card
                            variants={scaleOnView}
                            initial="initial"
                            whileInView="animate"
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
                                <PrimaryButton>
                                    {
                                        item.isLink ?
                                        <Link href={item.url} style={{"display": "flex", "alignItems": "center"}}
                                        >
                                            <PlusSvg width="15px" height="15px" color="#fff"/>
                                            <BtnText>Ver más</BtnText>
                                        </Link> :
                                        <a 
                                            href="https://api.whatsapp.com/send?phone=5492944154964&text=Hola"
                                            rel="noopene noreferrer"
                                            target="_blank"
                                            style={{"display": "flex", "alignItems": "center"}}
                                        >
                                            <WhatsSvg width="12px" height="12px" color="#fff"/>
                                            <BtnText>Contactanos</BtnText>
                                        </a>
                                    }
                                </PrimaryButton>
                            </div>
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default Services