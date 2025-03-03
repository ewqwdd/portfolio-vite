import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
import { useScreen } from "../../lib/hooks/useScreen";
import { IParallax } from "@react-spring/parallax";
import Spinner from "../Spinner/Spinner";
import ProfileMarqueAsync from "../ProfileMarque/ProfileMarque.async";
import MarqueeLoader from "../ProfileMarque/MarqueeLoader";
import { typings } from "../../lib/typings";
import { ContactForm } from "../ContactForm";

interface StickyProfileProps {
  goTo: (num: number) => () => void;
  entity: IParallax;
}

export default function StickyProfile({ goTo, entity }: StickyProfileProps) {
  const { width } = useScreen();
  if (!width) {
    return (
      <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    );
  }
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <div
      className="pt-[10svh]"
      style={{
        marginRight: margin,
      }}
    >
      <h2 className="text-white/80 text-p24Clamp leading-none text-right">
        {typings.subHeading}
      </h2>
      <h1 className="text-white text-h1Clamp font-bold text-right">
        {typings.heading}
      </h1>
      <Suspense fallback={<MarqueeLoader />}>
        <ProfileMarqueAsync />
      </Suspense>
      <p className="text-p20Clamp leading-none text-white/60 mt-6 text-right font-normal animate-pulse">
        {typings.types}
      </p>
      <Navigation goTo={goTo} entity={entity} />
      <ContactForm />
    </div>
  );
}
