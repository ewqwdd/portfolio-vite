import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';


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
      className="flex flex-col lg:mt-[6svh] mt-[2svh] max-lg:px-3"
      style={{
        marginLeft: margin,
      }}
    >
      <h2 className="text-h2Clamp font-bold">Skills:</h2>
      <div className="flex flex-wrap  mt-4 p-2 gap-2 max-lg:justify-center overflow-y-hidden">
        {skills.map((elem, index) => (
          <div className="text-white flex gap-2 p-4 items-center text-p24Clamp hover:opacity-75 transition-all" key={index}>
            <LazyLoadImage src={elem.icon} alt={elem.label} placeholder={<PlaceholderImage className="aspect-square min-h-[2rem] max-h-[2.5rem] h-[3vh]" />} className="select-none pointer-events-none aspect-square min-h-[2rem] max-h-[2.5rem] h-[3vh]" />
            {elem.label}
          </div>
        ))}
      </div>
      
    </section>
  );
}
