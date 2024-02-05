import SkillsSection from "../SkillsSection/SkillsSection";
import AboutSection from "../AboutSection/AboutSection";
import { useScreen } from "../../lib/hooks/useScreen";

export default function MarginWrapperFirstPage() {
  const width = useScreen();
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <>
      <AboutSection margin={margin} />
      <SkillsSection margin={margin} />
    </>
  );
}
