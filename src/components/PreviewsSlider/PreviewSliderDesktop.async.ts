import { lazy } from "react";

const PreviewSliderDesktopAsync = lazy(async() => await import('./PreviewSliderDesktop'))

export default PreviewSliderDesktopAsync