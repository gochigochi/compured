import { useEffect } from "react"
import { CartSvg, CheckSvg, FailedSvg } from "../svgs/Svgs"
import { Container, Box, ProgressBar, ProgressBarContainer } from "./Elements"

const Toast = ({
    msg = "Esta es una notificación",
    success = true,
    time = 3000,
    setShowToast = () => {}
}) => {

    useEffect(() => {

        const timer = setTimeout(() => setShowToast(false), time)

        return () => clearTimeout(timer)

    }, [])

    return (
        <Container>
            <Box>
                <ProgressBarContainer>
                    <ProgressBar t={time} />
                </ProgressBarContainer>
                <i>{success ? <CheckSvg /> : <FailedSvg />}</i>
                <span>{msg}</span>
            </Box>
        </Container>
    )
}

export default Toast