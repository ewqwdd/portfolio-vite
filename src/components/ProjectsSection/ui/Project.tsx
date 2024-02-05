import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project } from "../model/config";
import Tag from "./Tag";
import { twMerge } from "tailwind-merge";
import Link from "../../../assets/external-link.svg?react";
import './Project.css'

interface ProjectCompProps extends Project{
    className?: string
}

export default function ProjectComp({
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
      <p className="text-[20px] leading-tight font-light">{description}</p>
    );
  } else {
    descriptionWrapper = (
      <div className="text-[20px] leading-none">{description}</div>
    );
  }
  return (
    <a href={href} target="_blank" className={twMerge("flex relative flex-col ml-[32px] p-4 rounded-xl gap-4 hover:!opacity-100 hover:outline outline-1 outline-white/25 hover:bg-white/10 hover:shadow-lg parent group", className)}>
      <div className="flex gap-4 h-32 xl:h-40">
        <div className="grow">
          <LazyLoadImage src={image} className="max-h-full max-w-none"/>
        </div>
        <div className="flex items-start flex-col">
            <h3 className="transition-colors text-white font-semibold leading-tight text-[26px] xl:text-[32px] xl:leading-loose group-[.parent]:group-hover:text-emerald-400">
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
  );
}
