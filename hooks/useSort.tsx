import { useEffect, useState } from 'react'

const useSort = (items: [], comparative: string | number) => {

    const [sorted, setSorted] = useState(items)
    const [direction, setDirection] = useState<"up" | "down">(null)

    useEffect(() => {

        const sortedCopy: [] = [...sorted]

        switch (direction) {
            case "up":
                setSorted(sortedCopy.sort((a, b) => Number(a[comparative]) - Number(b[comparative])))
                break
            case "down":
                setSorted(sortedCopy.sort((a, b) => Number(b[comparative]) - Number(a[comparative])))
                break
            default:
                setSorted(sortedCopy.sort())
        }

    }, [direction])

    return { sorted, setDirection }
}

export default useSort