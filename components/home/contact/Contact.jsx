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
import { PageTitle } from "@/components/common_elements/CommonElements"
import Map from "@/components/map/Map"
import { LocationSvg, MailSvg, PhoneSvg } from "@/components/svgs/Svgs"

const Contact = () => {
    return (
        <ContactSection>
            <FormContainer>
                <PageTitle>Contactanos</PageTitle>
                <ContactForm />
            </FormContainer>
            <MapContainer>
                <MapFrame>
                    <Directions>
                        <Item>
                            <PhoneSvg />
                            <Text>(294)-4495226</Text>
                        </Item>
                        <Item>
                            <MailSvg />
                            <Text>info@compured.com.ar</Text>
                        </Item>
                        <Item>
                            <LocationSvg />
                            <Text>Av. Arrayanes 282 - Local 2, Villa La Angostura</Text>
                        </Item>
                    </Directions>
                    <Map />
                </MapFrame>
            </MapContainer>
        </ContactSection>
    )
}

export default Contact