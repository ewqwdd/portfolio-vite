import Marquee from "react-fast-marquee";
import Navigation from "../Navigation/Navigation";
import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useScreen } from "../../lib/hooks/useScreen";
import { IParallax } from "@react-spring/parallax";

const config: { icon: string; label: string }[] = [
  {
    icon: "react_icon.svg",
    label: "React",
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
    icon: "typescript_icon.svg",
    label: "Typescript",
  },
];

interface StickyProfileProps {
  goTo: (num: number) => () => void
  entity: IParallax
}

export default function StickyProfile({goTo, entity}: StickyProfileProps) {
  const width = useScreen();
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <div className="pt-28" style={{
        marginRight: margin
    }}>
      <h2 className="text-white/90 text-[32px] leading-none text-right">
        Junior Fullstack developer
      </h2>
      <h1 className="text-white text-[64px] font-bold text-right">
        Mykolai Skydan
      </h1>
      <Marquee className="mt-2 overflow-y-hidden" autoFill>
        {config.map((elem, index) => (
          <React.Fragment key={index}>
            <span className="gap-0.5 text-[24px] leading-none flex px-2 text-white/80">
              <LazyLoadImage src={elem.icon} alt={elem.label} width={24} height={24} />
              {elem.label}
            </span>
          </React.Fragment>
        ))}
      </Marquee>
      <p className="text-[20px] leading-none text-white/60 mt-6 text-right font-normal animate-pulse">
        Ready to translate ideas into code!
      </p>
      <Navigation goTo={goTo} entity={entity} />
    </div>
  );
}
