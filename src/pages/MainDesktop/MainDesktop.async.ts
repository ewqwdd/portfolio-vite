import { lazy } from "react";

const MainDesktopAsync = lazy(async() => await import('./MainDesktop'))

export default MainDesktopAsync