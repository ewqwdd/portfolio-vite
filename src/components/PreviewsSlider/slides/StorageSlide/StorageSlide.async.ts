import { lazy } from "react";

const StorageSlideAsync = lazy(async() => await import('./StorageSlide'))

export default StorageSlideAsync