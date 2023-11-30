import Image from "next/image"
import { ContainerFluid, Inner } from "@/components/common_elements/CommonElements"
import { Grid, ImageContainer } from "./Elements"
import { fadeDownIn } from "@/components/common_elements/CommonVariants"

const temp = [
    "https://drive.google.com/uc?export=view&id=1uf1Ccwug9C64hA0yIbzDBwbIv4C8XSiV",
    "https://drive.google.com/uc?export=view&id=1doeAFetymi5Wc3pMW8Qhw_TtcPaGVFkN",
    "https://drive.google.com/uc?export=view&id=1GWhXv5oUy_n1gwgK0VrOyQoHvyWvJ5Bs",
    "https://drive.google.com/uc?export=view&id=1XoPco9LuwV-bLwAHx2j7t4ON-61RQZ5U",
    "https://drive.google.com/uc?export=view&id=1cWStaSf7A9N6MXaJ_EwLhNaU95VWy5aR",
    "https://drive.google.com/uc?export=view&id=1IwtXjElPNn-2um9t5kPbTHDFZMAjDr-q",
]

const Clients = () => {
    return (
        <ContainerFluid>
            <Inner>
                <Grid>
                    {
                        temp.map(item => {
                            return (
                                <ImageContainer
                                    variants={fadeDownIn}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{once: true}}
                                    key={item}
                                >
                                    <Image
                                        src={item}
                                        alt=""
                                        width={100}
                                        height={100}
                                        style={{ "objectFit": "contain" }}
                                    />
                                </ImageContainer>
                            )
                        })
                    }
                </Grid>
            </Inner>
        </ContainerFluid>
    )
}

export default Clients