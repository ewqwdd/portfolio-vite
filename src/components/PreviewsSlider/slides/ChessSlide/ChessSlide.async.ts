import { lazy } from "react";

const ChessSlideAsync = lazy(async() => await import('./ChessSlide'))

export default ChessSlideAsync