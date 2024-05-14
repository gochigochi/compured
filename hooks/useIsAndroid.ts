import { useEffect, useState } from "react"

const useIsAndroid = () => {

    const [isAndroid, setIsAndroid] = useState(false)

    useEffect(() => {
        const checkAndroid = () => /Android/i.test(navigator.userAgent)
        setIsAndroid(checkAndroid())
    }, [])

  return { isAndroid }
}

export default useIsAndroid