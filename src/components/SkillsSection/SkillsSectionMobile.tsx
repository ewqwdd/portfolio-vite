import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./SkillsSection.module.css";
import { twMerge } from "tailwind-merge";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import PlaceholderImage from "../PlaceholderImage/PlaceholderImage";

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

export default function SkillsSectionMobile({ margin }: SkillsSectionProps) {
  return (
    <section
      id="Skills"
      className="flex flex-col lg:mt-[6svh] mt-[2svh] max-lg:px-3"
      style={{
        marginLeft: margin,
      }}
    >
      <h2 className="text-h2Clamp font-bold">Skills:</h2>
      <Swiper
        slidesPerView={'auto'}
        freeMode={true}
        spaceBetween={10}
        pagination={{
          type: "progressbar",
        }}
        modules={[FreeMode, Pagination]}
        className="tagsSwiper mySwiper bg-black/40 w-full"
      >
        {skills.map((elem, index) => (
          <SwiperSlide className="!w-auto" key={index}>
            <div
              className={twMerge(
                "text-white flex gap-2 py-2 my-2 mx-1 items-center text-p24Clamp hover:opacity-75 transition-all border-b-2 border-emerald-400",
                styles.skill
              )}
              style={{
                animationDelay: `${index * 0.2 + 0.3}s`,
              }}
            >
              <LazyLoadImage
                src={elem.icon}
                alt={elem.label}
                placeholder={<PlaceholderImage className="aspect-square min-h-[2rem] max-h-[2.5rem] h-[3vh]"/>}
                className="select-none pointer-events-none aspect-square min-h-[2rem] max-h-[2.5rem] h-[3vh]"
              />
              {elem.label}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
