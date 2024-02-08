import { ReactNode, useEffect, useMemo, useState } from "react";
import { screenContext } from "./screenContext";

interface ScreenProviderProps {
    children: ReactNode
}

export default function ScreenProvider({children}: ScreenProviderProps) {
    const [width, setWidth] = useState(window?.innerWidth)
    const [height, setHeight] = useState(window?.innerHeight)

    useEffect(() => {
        const updScreen = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', updScreen)

        return () => window.removeEventListener('resize', updScreen)
    })

    const values = useMemo(() => ({
        width, 
        height
    }), [width, height])

  return (
    <screenContext.Provider value={values}>
        {children}
    </screenContext.Provider>
  )
}
