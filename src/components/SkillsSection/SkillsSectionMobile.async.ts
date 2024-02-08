import { lazy } from "react";

const SkillsSectionMobileAsync = lazy(async() => await import('./SkillsSectionMobile'))

export default SkillsSectionMobileAsync