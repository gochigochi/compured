import {
    Container,
    Top,
    Title,
    Logo,
    Bottom,
    ZipInput,
    ZipLabel,
    Area,
    ResultLabel,
    Result,
} from "./Elements"

const ShippingCalculator = () => {

    //TODO zod simple client validation

    return (
        <Container>
            <Top>
                <Title>Envíos</Title>
                <Logo src="/assets/logos/andreani.png" width={150} height={50} />
            </Top>
            <Bottom>
                <Area>
                    <ZipLabel>Ingresá tu código postal</ZipLabel>
                    <ZipInput id="zip" name="zip" type="text" pattern="[0-9]*" />
                </Area>
                <Area>
                    <ResultLabel>Costo de envío</ResultLabel>
                    <Result>$15000</Result>
                </Area>
            </Bottom>
        </Container>
    )
}

export default ShippingCalculator