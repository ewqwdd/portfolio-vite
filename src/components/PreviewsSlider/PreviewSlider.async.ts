import { lazy } from "react";

const PreviewSliderAsync = lazy(async() => await import('./PreviewSlider'))

export default PreviewSliderAsync