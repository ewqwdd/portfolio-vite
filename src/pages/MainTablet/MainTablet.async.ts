import { lazy } from "react";

const MainTabletAsync = lazy(async() => await import('./MainTablet'))

export default MainTabletAsync