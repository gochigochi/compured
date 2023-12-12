import Image from "next/image"
import { motion } from "framer-motion"
import {
    Container,
    Left,
    ImageContainer,
    Right,
} from "./Elements"

const temp = [
    {
        id: 1,
        title: "Automatización de iluminación",
        text: "Ofrecemos soluciones de domótica que permiten controlar y programar la iluminación de manera automática. Ajusta la intensidad de la luz, crea escenas personalizadas y controla las luces desde dispositivos móviles.",
        src: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
    },
    {
        id: 2,
        title: "Automatización de iluminación",
        text: "Ofrecemos soluciones de domótica que permiten controlar y programar la iluminación de manera automática. Ajusta la intensidad de la luz, crea escenas personalizadas y controla las luces desde dispositivos móviles.",
        src: "https://drive.google.com/uc?export=view&id=15v7PBO5yrAglF0t16xqESutYQWnWWoFJ",
    },
]

const FeaturesSection = () => {
    return (
        <section>
            {
                temp.map(item => {

                    let x
                    item.id % 2 == 0 ? x = 20 : x = -20 

                    return (
                        <Container key={item.id}>
                            <Left>
                                <ImageContainer>
                                    <Image src={item.src} alt="" fill />
                                </ImageContainer>
                            </Left>
                            <Right>
                                <motion.h2
                                    initial={{opacity: 0, x: x }}
                                    whileInView={{opacity: 1, x: 0}}
                                    amount={100}
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{opacity: 0, x: x }}
                                    whileInView={{opacity: 1, x: 0}}
                                    amount={100}
                                >
                                    {item.text}
                                </motion.p>
                            </Right>
                        </Container>
                    )
                })
            }
        </section>
    )
}

export default FeaturesSection