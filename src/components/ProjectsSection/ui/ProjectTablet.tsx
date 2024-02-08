import { twMerge } from "tailwind-merge"
import { Project } from "../model/config"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Link from "../../../assets/external-link.svg?react";
import Tag from "./Tag";

interface ProjectCompProps extends Project{
    className?: string
}

export default function ProjectTablet({
    image,
    tags,
    title,
    description,
    href,
    className
  }: ProjectCompProps) {

    let descriptionWrapper;
  if (typeof description === "string") {
    descriptionWrapper = (
      <p className="lg:text-p20Clamp max-lg:text-p16Clamp leading-tight font-light w-[66%]">{description}</p>
    );
  } else {
    descriptionWrapper = (
      <div className="lg:text-p20Clamp max-lg:text-p16Clamp leading-none">{description}</div>
    );
  }

  return (
    <a href={href} target="_blank" className={twMerge("flex relative lg:ml-[32px] p-4 rounded-xl gap-4 hover:!opacity-100 hover:outline outline-1 outline-white/25 hover:bg-white/10 hover:shadow-lg parent group scrollCustom", className)}>
      <div className="flex flex-col gap-4 xl:h-40 max-w-[34%]">
        <LazyLoadImage src={image} />
        <div className="flex items-start flex-col">
            <h3 className="transition-colors text-white font-semibold leading-tight text-p24Clampxl:text-h2Clamp xl:leading-loose group-[.parent]:group-hover:text-emerald-400">
                {title}
                <Link className='absolute w-5 h-5 top-1 right-1 lg:top-5 lg:right-5 link' />
            </h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((elem, index) => (
            <Tag key={index}>{elem}</Tag>
          ))}
        </div>
        </div>
      </div>
      {descriptionWrapper}
    </a>
  )
}
