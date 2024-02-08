import { lazy } from "react";

const ProjectMobileAsync = lazy(async() => await import('./ProjectMobile'))

export default ProjectMobileAsync