import { Suspense } from "react";
import ProfileMarqueAsync from "../ProfileMarque/ProfileMarque.async";
import MarqueeLoader from "../ProfileMarque/MarqueeLoader";
import { typings } from "../../lib/typings";
import { ContactForm } from "../ContactForm";

export default function StickyProfile() {
  return (
    <div className="pt-[5svh]">
      <h1 className="text-white text-[3rem] font-bold text-center leading-tight">
        {typings.heading}
      </h1>
      <h2 className="text-white/80 text-p16Clamp leading-none text-center my-3">
        {typings.subHeading}
      </h2>
      <Suspense fallback={<MarqueeLoader />}>
        <ProfileMarqueAsync />
      </Suspense>
      <ContactForm />
      <p className="text-p20Clamp leading-none text-white/60 mt-6 text-center font-normal animate-pulse">
        {typings.types}
      </p>
    </div>
  );
}
