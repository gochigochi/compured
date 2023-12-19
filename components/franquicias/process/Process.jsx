import Image from "next/image"
import { SectionTitle } from "@/components/common_elements/CommonElements"
import { Grid, Item } from "./Elements"
import PopIn from "@/components/animations/PopIn"

const temp = [
    {
        id: 1,
        title: "Contacto inicial",
        text: "Expresar interés en adquirir una franquicia de Compured.",
        icon: "https://drive.google.com/uc?export=view&id=1oaWGo35TRJXhguTMG-pn5fBwCVlilHoX",
    },
    {
        id: 2,
        title: "Evaluación y selección",
        text: "Evaluaremos tu perfil y experiencia para determinar si cumples con los requisitos necesarios.",
        icon: "https://drive.google.com/uc?export=view&id=1wBxuyPt2-oS1yM0FX1DY8lFPfoa6PHFy",
    },
    {
        id: 3,
        title: "Reuniones y presentación",
        text: "Participar en reuniones y presentaciones donde se te proporcionará información detallada sobre la franquicia.",
        icon: "https://drive.google.com/uc?export=view&id=1Agux_c5I5W5v9UU7RgrGeE3kcxe95sjR",
    },
    {
        id: 4,
        title: "Análisis financiero",
        text: "Realizar un análisis financiero para determinar la viabilidad económica de la franquicia.",
        icon: "https://drive.google.com/uc?export=view&id=1TURoQtchdxeBx0QyjxwqTgSrZV6DVY1V",
    },
    {
        id: 5,
        title: "Firma del contrato",
        text: "Si eres seleccionado, se procederá a firmar el contrato de franquicia y se te brindará el apoyo necesario para iniciar tu negocio.",
        icon: "https://drive.google.com/uc?export=view&id=1EblBvTPSDPNGT1TsaSHyCq7xBUHFb1mv",
    },
    {
        id: 6,
        title: "Start Up",
        text: "Te acompañamos en el inicio del negocio, para que empiece a funcionar exitosamente desde el primer momento.",
        icon: "https://drive.google.com/uc?export=view&id=12mUdSiVJMCzzZ_sDjrbh8RqLB7KaYORg",
    },
]

const Process = () => {
    return (
        <section style={{"marginBottom": "35px"}}>
            <SectionTitle style={{"marginBottom": "25px"}}>Proceso de Franquicia</SectionTitle>
            <Grid>
                {
                    temp.map(item => {
                        return (
                            <PopIn key={item.id}>
                                <Item>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={45}
                                        height={45}
                                        style={{
                                            "ObjectFit": "contain",
                                            "top": "20px"
                                        }}
                                    />
                                </Item>
                            </PopIn>
                        )
                    })
                }
            </Grid>
        </section>
    )
}

export default Process