import { useEffect, Dispatch, SetStateAction } from "react"
import { CheckSvg, FailedSvg } from "../svgs/Svgs"
import { Container, Box, ProgressBar, ProgressBarContainer } from "./Elements"
import type { ToastType } from "@/models/toast"


const Toast = ({
    msg = "La acción se ha completado",
    success,
    time = 3000,
    setShowToast
} : ToastType) => {

    useEffect(() => {

        const timer = setTimeout(() => setShowToast(false), time)

        return () => clearTimeout(timer)

    }, [])

    return (
        <Container>
            <Box>
                <ProgressBarContainer>
                    {/* <ProgressBar t={time} /> */}
                </ProgressBarContainer>
                <i>{success ? <CheckSvg /> : <FailedSvg />}</i>
                <span>{msg}</span>
            </Box>
        </Container>
    )
}

export default Toast