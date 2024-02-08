import { lazy } from "react";

const ProfileMarqueAsync = lazy(async() => await import('./ProfileMarque'))

export default ProfileMarqueAsync