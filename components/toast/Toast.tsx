import { useEffect } from "react"
import { CheckSvg, FailedSvg } from "../svgs/Svgs"
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
        <div className="fixed top-6  left-0 w-screen flex justify-center z-[850]">
            <div className="bg-zinc-100 relative shadow-lg rounded-lg p-5 w-[90vw] max-w-[330px] flex items-center overflow-hidden">
                <div className="absolute bottom-[5px] left-0 w-full flex justify-center">
                    <div className="animate-progress-bar relative w-11/12 rounded-full h-[3px] origin-left bg-[#d9d9d9]"></div>
                </div>
                <i className="mr-3">{success ? <CheckSvg /> : <FailedSvg />}</i>
                <span>{msg}</span>
            </div>
        </div>
    )
}

export default Toast