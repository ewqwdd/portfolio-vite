import { lazy } from "react";

const ChessSlideMobileAsync = lazy(async() => await import('./ChessSlideMobile'))
export default ChessSlideMobileAsync