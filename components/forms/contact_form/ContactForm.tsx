import { useState, useRef } from "react"
import dynamic from "next/dynamic"
import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import { ContactMessageSchema } from "@/utils/zodSchemas"
import { customFetch } from "@/utils/customFetch"
const ButtonLoader = dynamic(() => import("@/components/loaders/ButtonLoader/ButtonLoader"))
const Toast = dynamic(() => import("@/components/toast/Toast"))

const ContactForm = () => {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)
  const [inputError, setInputError] = useState(null)
  const formData = useRef({ name: "", email: "", message: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const target = e.target as HTMLFormElement

    setLoading(true)

    const validation = ContactMessageSchema.safeParse(formData.current)

    if (validation.success === false) {
      setInputError(validation.error.issues[0].message)
      setTimeout(() => setInputError(null), 3000)
      setLoading(false)
      return
    }

    const response = await customFetch("/api/send-contact-mail", validation.data, "POST")

    if (!response.success) {
      console.log("Error sending message", response.msg)
      setError(true)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
    formData.current = { name: "", email: "", message: "" }
    target.reset()
  }

  return (
    <>
      <form noValidate onSubmit={handleSubmit} className="relative w-full flex flex-col gap-6">
        <div className="relative grid">
          <input
            className="rounded-lg p-[15px_0_15px_15px] input-border"
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            aria-label="nombre"
            aria-required="true"
            onChange={(e) => formData.current.name = e.target.value}
          />
        </div>
        <div className="relative grid">
          <input
            className="rounded-lg p-[15px_0_15px_15px] input-border"
            id="email"
            name="email"
            type="email"
            placeholder="tumail@ejemplo.com"
            aria-label="email"
            aria-required="true"
            onChange={(e) => formData.current.email = e.target.value}
          />
        </div>
        <div className="relative grid">
          <textarea
            className="input-border rounded-lg p-[15px]"
            id="message"
            name="message"
            placeholder="Dejanos un mensaje"
            aria-label="text-area"
            aria-required="true"
            rows={5}
            onChange={(e) => formData.current.message = e.target.value}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-red-600">{inputError ? inputError : null}</p>
          <PrimaryButton
            dis={loading}
            disabled={loading}
            aria-disabled={loading}
            type="submit"
          >
            {loading ? <ButtonLoader /> : "Enviar"}
          </PrimaryButton>
        </div>
      </form>
      {
        error ?
          <Toast
            success={false}
            msg="Ocurrió un error. Vuelva a intentarlo."
            setShowToast={setError}
          /> :
          null
      }
      {
        sent ?
          <Toast
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