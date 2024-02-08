import AboutSection from "../AboutSection/AboutSection";
import { useScreen } from "../../lib/hooks/useScreen";
import Spinner from "../Spinner/Spinner";
import SkillsSectionAsync from "../SkillsSection/SkillsSection.async";
import { Suspense } from "react";

const SkillsLoader = (
  <div className="bg-black/30 animate-pulse rounded-lg w-full max-[1446px]:h-56 h-40" />
);

export default function MarginWrapperFirstPage() {
  const { width } = useScreen();
  if (!width) {
    return (
      <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    );
  }
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <>
      <AboutSection margin={margin} />
      <Suspense fallback={SkillsLoader}>
        <SkillsSectionAsync margin={margin} />
      </Suspense>
    </>
  );
}
