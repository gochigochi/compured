import Image from "next/image"
import {
    Container,
    Card,
    Content,
    ImageContainer,
    Img,
} from "./Elements"
import PopIn from "@/components/animations/PopIn"

const temp = [
    {
        id: 1,
        title: "Automatización de iluminación",
        text: "Ofrecemos soluciones de domótica que permiten controlar y programar la iluminación de manera automática. Ajusta la intensidad de la luz, crea escenas personalizadas y controla las luces desde dispositivos móviles.",
        // src: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
        src: "/assets/app-lights.png",
    },
    {
        id: 2,
        title: "Sistemas de seguridad inteligente",
        text: "Sistemas de seguridad inteligente que se integran con la domótica: incluyen cámaras de seguridad, sensores de movimiento y alarmas, que pueden ser monitoreados y controlados a distancia para proteger tu hogar o negocio.",
        // src: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
        src: "/assets/app-lights.png",
    },
    {
        id: 3,
        title: "Control de temperatura",
        text: "Soluciones de domótica para el control inteligente de la temperatura en el hogar o en el lugar de trabajo. Permite ajustar la calefacción, el aire acondicionado o los sistemas de ventilación según las preferencias y horarios establecidos.",
        // src: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
        src: "/assets/app-lights.png",
    },
    {
        id: 4,
        title: "Gestión de energía sostenible",
        text: "Nos enfocamos en soluciones de domótica que promueven la eficiencia energética y la gestión sostenible. Esto incluye el monitoreo y control del consumo energético.",
        // src: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
        src: "/assets/app-lights.png",
    },
]

const FeaturesSection = () => {
    return (
        <Container>
            {
                temp.map(item => {
                    return (
                        <PopIn key={item.id}>
                            <Card>
                                <Content>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </Content>
                                <ImageContainer className="img-container">
                                    <Img>
                                        <Image
                                            src={item.src}
                                            alt=""
                                            fill
                                        />
                                    </Img>
                                </ImageContainer>
                            </Card>
                        </PopIn>
                    )
                })
            }
        </Container>
        // <section>
        //     {
        //         temp.map(item => {

        //             let x = -20
        //             let left = true
        //             item.id % 2 == 0 ? x = 20 : x = -20 

        //             if (item.id % 2 == 0) {
        //                 x = 20
        //                 left = false
        //             }

        //             return (
        //                 <Container key={item.id}>
        //                     <Left>
        //                         <ImageContainer>
        //                             <Image src={item.src} alt="" fill />
        //                         </ImageContainer>
        //                     </Left>
        //                     <Right>
        //                         <motion.h2
        //                             initial={{opacity: 0, x: x }}
        //                             whileInView={{opacity: 1, x: 0}}
        //                             amount={100}
        //                         >
        //                             {item.title}
        //                         </motion.h2>
        //                         <motion.p
        //                             initial={{opacity: 0, x: x }}
        //                             whileInView={{opacity: 1, x: 0}}
        //                             amount={100}
        //                         >
        //                             {item.text}
        //                         </motion.p>
        //                     </Right>
        //                 </Container>
        //             )
        //         })
        //     }
        // </section>
    )
}

export default FeaturesSection