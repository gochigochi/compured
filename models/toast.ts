import { Dispatch, SetStateAction } from "react"

export type ToastType = {
    msg: string
    success: boolean
    time?: number
    setShowToast: Dispatch<SetStateAction<boolean>>
}