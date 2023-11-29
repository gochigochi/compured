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
            "https://drive.google.com/uc?export=view&id=1ee819aLwME2qr-398rlVmZbFuxtFOR7O",
            "https://drive.google.com/uc?export=view&id=1yhHhZtJGhdeDkqq_qAKyiQ9hC-EgEsQc"
        ]
    },
    {
        text: "Débito",
        logos: [
            "https://drive.google.com/uc?export=view&id=1OXkQ7Vp-6Z3c5WwJAdHcOVNLOOvuaZj8",
            "https://drive.google.com/uc?export=view&id=1ElOsLWi6PTjzhO6xcQqM9FHBZlOCeQsj",
            "https://drive.google.com/uc?export=view&id=15ZZ0N29xFkD7xxuajC2S4E1S-jQCguQG",
            "https://drive.google.com/uc?export=view&id=1nsy1oERD4dq10m4UQYlurK8kEhR8rq6l",
        ]
    },
    {
        text: "Crédito",
        logos: [
            "https://drive.google.com/uc?export=view&id=1Ep3bQ9jcfEEATqkiOfzpXcZFtli2bURb",
            "https://drive.google.com/uc?export=view&id=1EFUG0jLzaw2HyQ5ha3h38jsPSgbiDqaY",
            "https://drive.google.com/uc?export=view&id=1UjhLib1eAq5vvnebBW-e1HkGlU88jixI",
            "https://drive.google.com/uc?export=view&id=1dR0vroSkTOgqx8boLGVD0XQSXBk02kjv",
        ]
    },
    {
        text: "Efectivo",
        logos: [
            "https://drive.google.com/uc?export=view&id=1-P46yTG5ZT-PtgiqDfAI-dVA2MPVxBT5",
            "https://drive.google.com/uc?export=view&id=1j8GV9wjaETW5OWFDLXmHRHQ05QOkEhy-"
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
                                                            alt=" "
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