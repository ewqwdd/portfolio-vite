import { lazy } from "react";

const MainMobileAsync = lazy(async() => await import('./MainMobile'))

export default MainMobileAsync