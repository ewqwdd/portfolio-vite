import { lazy } from "react";

const ContactSectionAsync = lazy(async() => await import('./ContactSection'))

export default ContactSectionAsync