import { LazyLoadImage } from 'react-lazy-load-image-component';


interface SkillsSectionProps {
  margin?: number;
}

interface Skill {
  icon: string;
  label: string;
}

const skills: Skill[] = [
  {
    icon: "/react_icon.svg",
    label: "React",
  },
  {
    icon: "/node-js_icon.svg",
    label: "Node.js",
  },
  {
    icon: "nextjs_icon.svg",
    label: "Next.js",
  },
  {
    icon: "nestjs_icon.svg",
    label: "Nest.js",
  },
  {
    icon: "/typescript_icon.svg",
    label: "Typescript",
  },
  {
    icon: "css_icon.svg",
    label: "CSS",
  },
  {
    icon: "html_icon.svg",
    label: "HTML",
  },
  {
    icon: "sass_icon.svg",
    label: "SASS",
  },
];

export default function SkillsSection({ margin }: SkillsSectionProps) {
  return (
    <section
      id="Skills"
      className="flex flex-col mt-[126px]"
      style={{
        marginLeft: margin,
      }}
    >
      <h2 className="text-[32px] font-bold">Skills:</h2>
      <div className="flex flex-wrap bg-black/50 mt-4 p-2 gap-2">
        {skills.map((elem, index) => (
          <div className="text-white flex gap-2 p-4 items-center text-[24px] hover:opacity-75 transition-all" key={index}>
            <LazyLoadImage src={elem.icon} alt={elem.label} width={36} height={36} className="select-none pointer-events-none" />
            {elem.label}
          </div>
        ))}
      </div>
      
    </section>
  );
}
