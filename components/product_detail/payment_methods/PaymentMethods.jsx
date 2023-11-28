import Image from "next/image"
import {
    Container,
    Title,
    Table,
    Data,
    Row,
    LogoContainer,
    Logo,
} from "./Elements"

const temp = [
    {
        text: "Con el respaldo de",
        logos: [
            "/assets/logos/mercado-credito.png",
            "/assets/logos/mercado-pago.png"
        ]
    },
    {
        text: "Débito",
        logos: [
            "/assets/logos/master-deb.png",
            "/assets/logos/maestro-deb.png",
            "/assets/logos/visa-deb.png",
            "/assets/logos/cabal-deb.png",
        ]
    },
    {
        text: "Crédito",
        logos: [
            "/assets/logos/visa.png",
            "/assets/logos/amex.png",
            "/assets/logos/naranja.png",
            "/assets/logos/master.png",
        ]
    },
    {
        text: "Efectivo",
        logos: [
            "/assets/logos/rapi-pago.png",
            "/assets/logos/pago-facil.png"
        ]
    },
]

const PaymentMethods = () => {
    return (
        <Container>
            <Title>Métodos de pago</Title>
            <Table>
                <tbody>
                    {
                        temp.map(el => {
                            return (
                                <Row key={el.text}>
                                    <Data>{el.text}</Data>
                                    {
                                        el.logos.map(logo => {
                                            return (
                                                <Data key={logo}>
                                                    <LogoContainer>
                                                        <Logo
                                                            src={logo}
                                                            alt=""
                                                            fill
                                                        />
                                                    </LogoContainer>
                                                </Data>
                                            )
                                        })
                                    }
                                </Row>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default PaymentMethods