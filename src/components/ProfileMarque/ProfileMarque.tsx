import React from 'react'
import Marquee from 'react-fast-marquee'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { twMerge } from 'tailwind-merge'
import PlaceholderImage from '../PlaceholderImage/PlaceholderImage';

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
interface ProfileMarqueProps {
    className?: string
}

export default function ProfileMarque({className}: ProfileMarqueProps) {
  return (
    <Marquee className={twMerge("mt-2 overflow-y-hidden", className)} autoFill>
        {config.map((elem, index) => (
          <React.Fragment key={index}>
            <span className="gap-0.5 max-[520px]:text-p20Clamp text-p24Clamp leading-none flex px-2 text-white/80">
              <LazyLoadImage src={elem.icon} placeholder={<PlaceholderImage className='w-6 h-6 max-[520px]:h-5 max-[520px]:w-5' />} alt={elem.label} className='w-6 h-6 max-[520px]:h-5 max-[520px]:w-5' />
              {elem.label}
            </span>
          </React.Fragment>
        ))}
      </Marquee>
  )
}
