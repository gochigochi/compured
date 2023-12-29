import Map from "@/components/map/Map"
import { useRouter } from "next/router"
import ContactForm from "@/components/forms/contact_form/ContactForm"
import {
    ContactSection,
    MapContainer,
    FormContainer,
    MapFrame,
    Directions,
    Item,
    Text,
} from "./Elements"
import { SectionTitle } from "@/components/common_elements/CommonElements"
import { LocationSvg, MailSvg, PhoneSvg } from "@/components/svgs/Svgs"

const Contact = () => {

    const { pathname } = useRouter()

    return (
        <ContactSection>
            <FormContainer>
                <SectionTitle>Contactanos</SectionTitle>
                <ContactForm />
            </FormContainer>
            <MapContainer>
                <MapFrame>
                    <Directions>
                        <Item>
                            <PhoneSvg />
                            <Text>
                                {
                                    pathname === "/franquicias" ?
                                    "+54 9 2944 24-7376" :
                                    "+54 9 2944 15-4964"
                                }
                            </Text>
                        </Item>
                        <Item>
                            <MailSvg />
                            <Text>info@compured.com.ar</Text>
                        </Item>
                        <Item>
                            <LocationSvg />
                            <Text>Av. Arrayanes 282 - Local 2, Villa La Angostura, Neuquén</Text>
                        </Item>
                    </Directions>
                    <Map />
                </MapFrame>
            </MapContainer>
        </ContactSection>
    )
}

export default Contact