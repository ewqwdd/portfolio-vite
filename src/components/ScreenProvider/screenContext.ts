import { createContext } from "react";

interface ScreenContextSchema {
    width?: number
    height?: number
}

export const screenContext = createContext<ScreenContextSchema>({})