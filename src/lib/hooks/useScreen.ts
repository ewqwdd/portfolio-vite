import { useEffect, useState } from "react"

export const useScreen = () => {
    const [width, setWidth] = useState(window?.innerWidth)
    useEffect(() => {
        const updWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updWidth)

        return () => window.removeEventListener('resize', updWidth)
    })
    return width
}