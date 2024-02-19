import { useState, useRef } from "react"
import dynamic from "next/dynamic"
import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import { ContactMessageSchema } from "@/utils/zodSchemas"
import { customFetch } from "@/utils/customFetch"
import {
  Form,
  InputContainer,
  Input,
  TextArea,
  GeneralError,
  ButtonArea,
} from "../Elements"
const DynButtonLoader = dynamic(() => import("@/components/loaders/ButtonLoader/ButtonLoader"))
const DynToast = dynamic(() => import("@/components/toast/Toast"))

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)
  const [inputError, setInputError] = useState(null)
  const formData = useRef({ name: "", email: "", message: "" })

  const handleSubmit = async (e) => {
    
    e.preventDefault()

    setLoading(true)

    const validation = ContactMessageSchema.safeParse(formData.current)

    if (!validation.success) {
      setInputError(validation.error.issues[0].message)
      setTimeout(() => setInputError(null), 3000)
      setLoading(false)
      return
    }

    const response = await customFetch("/api/send-contact-mail", validation.data, "POST")

    if (!response.success) {
      console.log("IN ERROR...", response.msg)
      setError(true)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
    formData.current = { name: "", email: "", message: "" }
    e.target.reset()
  }

  return (
    <>
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
          <GeneralError>{inputError ? inputError : null}</GeneralError>
          <PrimaryButton
            dis={loading}
            disabled={loading}
            aria-disabled={loading}
            type="submit"
          >
            { loading ?  <DynButtonLoader /> : "Enviar" }
          </PrimaryButton>
        </ButtonArea>
      </Form>
      {
        error ?
          <DynToast
            success={false}
            msg="Ocurrió un error. Vuelva a intentarlo."
            setShowToast={setError}
          /> :
          null
      }
      {
        sent ?
          <DynToast
            success={true}
            msg="El mensaje fue enviado."
            setShowToast={setSent}
            time={3000}
          /> :
          null
      }
    </>
  )
}

export default ContactForm