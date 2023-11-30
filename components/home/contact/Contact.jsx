import ContactForm from "@/components/forms/contact_form/ContactForm"
import { ContactSection, MapContainer, FormContainer } from "./Elements"
import { PageTitle } from "@/components/common_elements/CommonElements"

const Contact = () => {
    return (
        <ContactSection>
            <FormContainer>
                <PageTitle>Contactanos</PageTitle>
                <ContactForm />
            </FormContainer>
            <MapContainer>
                Map
            </MapContainer>
        </ContactSection>
    )
}

export default Contact