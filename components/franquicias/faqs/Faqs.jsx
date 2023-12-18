import Accordion from "@/components/accordion/Accordion"
import { SectionTitle } from "@/components/common_elements/CommonElements"
import { BgContainer } from "./Elements"

const temp = [
    {
        id: 1,
        q: "Asistencia en la selección de ubicación",
        a: "Ayuda en la identificación y evaluación de las mejores ubicaciones para tu franquicia."
    },
    {
        id: 2,
        q: "Marketing",
        a: "Brindamos orientación en estrategias de marketing y publicidad para alcanzar el estado de resultados propuestos"
    },
    {
        id: 3,
        q: "Gestión de operaciones",
        a: "Capacitación continua en la gestión eficiente de las operaciones diarias del negocio."
    },
    {
        id: 4,
        q: "Actualizaciones sobre tecnología",
        a: "Talleres presenciales y virtuales sobre las últimas tendencias y avances tecnológicos relevantes para el negocio."
    },
]

const Faqs = () => {
    return (
        <BgContainer>
            <SectionTitle style={{ "color": "#fff" }}>Soporte y entrenamiento</SectionTitle>
            <Accordion style={{"marginTop": "15px"}}>
                {
                    temp.map(item => {
                        return(
                            <Accordion.Item id={item.id}>
                                <Accordion.ItemHeader id={item.id}>{item.q}</Accordion.ItemHeader>
                                <Accordion.ItemBody>{item.a}</Accordion.ItemBody>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </BgContainer>
    )
}

export default Faqs