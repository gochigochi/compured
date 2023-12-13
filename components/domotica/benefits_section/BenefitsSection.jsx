import PopIn from '@/components/animations/PopIn'
import { SectionTitle } from '@/components/common_elements/CommonElements'
import { Bullet, Grid } from './Elements'

const temp = [
    {
        id: 1,
        title: "Comodidad",
        text: "Mayor nivel de comodidad al permitir el control automatizado de diferentes dispositivos y sistemas en el hogar, como la iluminación, la temperatura y los electrodomésticos."
    },
    {
        id: 2,
        title: "Eficiencia energética",
        text: "Optimización del consumo de energía al programar y controlar de manera inteligente el uso de los dispositivos, lo que puede llevar a ahorros significativos en los costos de energía."
    },
    {
        id: 3,
        title: "Seguridad",
        text: "Los sistemas de seguridad integrados en la domótica, como las cámaras de seguridad, los sensores de movimiento y las alarmas, brindan mayor protección al monitorear y controlar el entorno del hogar o negocio."
    },
    {
        id: 4,
        title: "Control remoto",
        text: "Control de los dispositivos y sistemas desde cualquier lugar, a través de dispositivos móviles o internet, lo que ofrece flexibilidad y conveniencia."
    },
    {
        id: 5,
        title: "Gestión inteligente del hogar",
        text: "Gestión eficiente del hogar al automatizar tareas como el riego del jardín, la gestión del sistema de riego o la apertura y cierre de persianas, lo que facilita el cuidado del hogar."
    },
]

const BenefitsSection = () => {
    return (
        <>
            <SectionTitle>Beneficios de la Domótica</SectionTitle>
            <Grid>
                {
                    temp.map(item => {
                        return(
                            <PopIn key={item.id}>
                                <Bullet>{item.id}</Bullet>
                                <p>{item.text}</p>
                            </PopIn>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default BenefitsSection