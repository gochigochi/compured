import { useState, useRef } from "react"
import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import { ContactMessageSchema } from "@/utils/zodSchemas"
import {
  Form,
  InputContainer,
  Input,
  TextArea,
  GeneralError,
  ButtonArea,
} from "../Elements"


const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const formData = useRef({ name: "", email: "", message: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validation = ContactMessageSchema.safeParse(formData.current)

    if (!validation.success) {
      setError(validation.error.issues[0].message)
      setTimeout(() => setError(null), 3000)
      return
    }

    const response = await fetch("/api/send-contact-mail")

    if (!response.ok) {
      console.log("Error enviando email")
      return
    }

    console.log("El email fue enviado")

  }

  console.log(error)

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          aria-label="nombre"
          aria-required="true"
          onChange={(e) => formData.current.name = e.target.value}
        />
      </InputContainer>
      <InputContainer>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tumail@ejemplo.com"
          aria-label="email"
          aria-required="true"
          onChange={(e) => formData.current.email = e.target.value}
        />
      </InputContainer>
      <InputContainer>
        <TextArea
          id="message"
          name="message"
          placeholder="Dejanos un mensaje"
          aria-label="text-area"
          aria-required="true"
          rows={5}
          onChange={(e) => formData.current.message = e.target.value}
        />
      </InputContainer>
      <ButtonArea>
        <GeneralError>{error ? error : null}</GeneralError>
        <PrimaryButton
          dis={loading}
          disabled={loading}
          aria-disabled={loading}
          type="submit"
        >
          Enviar
        </PrimaryButton>
      </ButtonArea>
    </Form>
  )
}

export default ContactForm