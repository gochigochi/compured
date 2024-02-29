import Image from "next/image"
import LoginForm from "@/components/forms/login_form/LoginForm"
import { LoginScreen, FormContainer, Header } from "./Elements"

const Login = () => {
    return (
        <LoginScreen>
            <FormContainer>
                <Header>
                    <Image
                        src="/assets/logo.png"
                        alt=""
                        width={200}
                        height={100}
                        priority
                        style={{ "objectFit": "contain" }}
                    />
                </Header>
                <LoginForm />
            </FormContainer>
        </LoginScreen>
    )
}

export default Login