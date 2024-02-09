import { lazy } from "react";

const StorageSlideMobileAsync = lazy(async() => await import('./StorageSlideMobile'))

export default StorageSlideMobileAsync