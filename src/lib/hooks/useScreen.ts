import { useContext } from "react"
import { screenContext } from "../../components/ScreenProvider"

export const useScreen = () => useContext(screenContext)