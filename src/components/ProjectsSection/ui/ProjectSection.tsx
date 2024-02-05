import { useScreen } from "../../../lib/hooks/useScreen";
import { projects } from "../model/config";
import Project from "./Project";

export default function ProjectSection() {
  const width = useScreen();
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <section
      id="Projects"
      style={{
        marginLeft: margin,
      }}
    >
      <h2 className="text-[32px] font-bold">Projects:</h2>
      <div className="group flex flex-col gap-2">
        {projects.map((elem, index) => (
            <Project key={index} {...elem} className="group-hover:opacity-70 transition-all" />
        ))}
      </div>
    </section>
  );
}
