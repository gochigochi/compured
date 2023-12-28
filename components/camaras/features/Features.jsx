import React from 'react'
import { Grid, Box } from './Elements'
import Image from 'next/image'
import PopIn from '@/components/animations/PopIn'

const temp = [
    {
        title: "Prevención de robos",
        text: "Nuestras cámaras disuaden a posibles intrusos y proporcionan evidencia visual en caso de incidentes.",
        image: "https://drive.google.com/uc?export=view&id=1ZdBonJV9lJ6vxlA1F-LtAMlB62Lo6bNq"
    },
    {
        title: "Control remoto",
        text: "Accede a las cámaras desde tu dispositivo móvil, permitiéndote supervisar tu propiedad en tiempo real desde cualquier lugar.",
        image: "https://drive.google.com/uc?export=view&id=1DDJTdgkKUESaGWxjaPHEPEgpUVOpQ19w"
    },
    {
        title: "Tranquilidad",
        text: "Saber que tu hogar o negocio está protegido las 24 horas del día, los 7 días de la semana",
        image: "https://drive.google.com/uc?export=view&id=1GIq_Fx_3bGtFBH-BU6o2O55Ll-8CA7lh"
    },
    {
        title: "Registro de seguridad",
        text: "Las grabaciones de alta calidad pueden ser útiles en investigaciones y proporcionan documentación de eventos en tiempo real.",
        image: "https://drive.google.com/uc?export=view&id=1zE2OsD56wZqLanhxA5B0QonksOm3IzJf"
    },
]

const Features = () => {
    return (
        <section>
            <Grid>
                {
                    temp.map(item => {
                        return (
                            <Box>
                                <Image src={item.image} alt="" width={400} height={400} />
                                <PopIn>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </PopIn>
                            </Box>
                        )
                    })
                }
            </Grid>
        </section>
    )
}

export default Features