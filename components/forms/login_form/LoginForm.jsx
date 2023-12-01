import { useState, useRef } from "react"
import dynamic from "next/dynamic"
import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import { AdminLoginSchema } from "@/utils/zodSchemas"
import {
    Form,
    InputContainer,
    Input,
    GeneralError,
    ButtonArea,
} from "../Elements"
const DynButtonLoader = dynamic(() => import("@/components/loaders/ButtonLoader/ButtonLoader"))

const LoginForm = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [inputError, setInputError] = useState(null)
    const formData = useRef({ user: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        const validation = AdminLoginSchema.safeParse(formData.current)

        if (!validation.success) {
            setInputError(validation.error.issues[0].message)
            setTimeout(() => setInputError(null), 3000)
            setLoading(false)
            return
        }

        const fetched = await fetch("/api/admin-login", {
            method: "POST",
            body: JSON.stringify(validation.data),
        })

        const response = await fetched.json()

        if (!response.success) {
            setInputError(response.msg)
            setTimeout(() => setInputError(null), 3000)
            setLoading(false)
            return
        }

        setLoading(false)
    }

    return (
        <>
            <Form noValidate onSubmit={handleSubmit}>
                <InputContainer>
                    <Input
                        id="user"
                        name="user"
                        type="user"
                        placeholder="usuario@ejemplo.com"
                        aria-label="user"
                        aria-required="true"
                        onChange={(e) => formData.current.user = e.target.value}
                    />
                </InputContainer>
                <InputContainer>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        aria-label="password"
                        aria-required="true"
                        onChange={(e) => formData.current.password = e.target.value}
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
                        {loading ? <DynButtonLoader /> : "Ingresar"}
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
        </>
    )
}

export default LoginForm