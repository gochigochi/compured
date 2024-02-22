import { useState, useRef } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import PrimaryButton from "@/components/buttons/primary/PrimaryButton"
import { AdminLoginSchema } from "@/utils/zodSchemas"
const DynButtonLoader = dynamic(() => import("@/components/loaders/ButtonLoader/ButtonLoader"))

const LoginForm = () => {

    const router = useRouter()
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

        router.push("/dashboard")
    }

    return (
        <>
            <form noValidate onSubmit={handleSubmit} className="relative w-full flex flex-col gap-6">
                <div className="relative grid">
                    <input
                        className="rounded-lg p-[15px_0_15px_15px] input-border"
                        id="user"
                        name="user"
                        type="user"
                        placeholder="usuario@ejemplo.com"
                        aria-label="user"
                        aria-required="true"
                        onChange={(e) => formData.current.user = e.target.value}
                    />
                </div>
                <div className="relative grid">
                    <input
                        className="rounded-lg p-[15px_0_15px_15px] input-border"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        aria-label="password"
                        aria-required="true"
                        onChange={(e) => formData.current.password = e.target.value}
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
                        {loading ? <DynButtonLoader /> : "Ingresar"}
                    </PrimaryButton>
                </div>
            </form>
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