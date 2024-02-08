import { lazy } from "react";

const SkillsSectionAsync = lazy(async() => await import('./SkillsSection'))

export default SkillsSectionAsync