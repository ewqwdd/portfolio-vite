import { lazy } from "react";

const ProjectAsync = lazy(async() => await import('./Project'))

export default ProjectAsync