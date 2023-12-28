import { SectionTitle } from "@/components/common_elements/CommonElements"
import { Grid, Card, Bullet } from "./Elements"
import PopIn from "@/components/animations/PopIn"

const temp = [
    {
        id: 1,
        title: "Evaluación y selección del sistema",
        text: "Visita al lugar y evaluación de los puntos estratéticos para ubicar las cámaras. Asesoramiento en la selección del sistema de cámaras adecuado, considerando factores como la calidad de imagen, capacidad de almacenamiento y otras opciones.",
    },
    {
        id: 2,
        title: "Instalación profesional",
        text: "Nuestros técnicos altamente capacitados realizarán la instalación con precisión y eficiencia, asegurando que las cámaras estén correctamente posicionadas, los cables ocultos y el sistema configurado para un rendimiento óptimo.",
    },
    {
        id: 3,
        title: "Configuración y pruebas",
        text: "Configuración el sistema para que se ajuste a tus necesidades específicas. Realizaremos pruebas exhaustivas para garantizar el correcto funcionamiento de las cámaras y que puedas acceder al sistema de forma remota sin problemas.",
    },
    {
        id: 4,
        title: "Capacitación y soporte",
        text: "Brindamos una capacitación básica para utilizar y aprovechar al máximo el sistema de cámaras. Además, nuestro equipo está disponible para brindarte soporte técnico en caso de consultas o inconvenientes.",
    },
]

const Process = () => {

    return (
        <section>
            <SectionTitle style={{ "margin": "25px 0" }}>Pasos de instalación</SectionTitle>
            <PopIn>
                <Grid>
                    {
                        temp.map(item => {
                            return (
                                <Card>
                                    <Bullet>{item.id}</Bullet>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </Card>
                            )
                        })
                    }
                </Grid>
            </PopIn>
        </section>
    )
}

export default Process