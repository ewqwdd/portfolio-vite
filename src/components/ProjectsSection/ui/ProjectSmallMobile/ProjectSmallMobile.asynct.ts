import { lazy } from "react";

const ProjectSmallMobileAsync = lazy(async() => await import('./ProjectSmallMobile'))

export default ProjectSmallMobileAsync