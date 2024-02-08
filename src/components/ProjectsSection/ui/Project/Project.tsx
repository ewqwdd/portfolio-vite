import { LazyLoadImage } from "react-lazy-load-image-component";
import { Project } from "../../model/config";
import Tag from "../Tag";
import { twMerge } from "tailwind-merge";
import Link from "../../../../assets/external-link.svg?react";
import "../Project.css";
import PlaceholderImage from "../../../PlaceholderImage/PlaceholderImage";

interface ProjectCompProps extends Project {
  className?: string;
}

export default function ProjectComp({
  image,
  tags,
  title,
  description,
  href,
  className,
}: ProjectCompProps) {
  let descriptionWrapper;
  if (typeof description === "string") {
    descriptionWrapper = (
      <p className="text-p20Clamp leading-tight font-light max-h-full">{description}</p>
    );
  } else {
    descriptionWrapper = (
      <div className="text-p20Clamp leading-none max-h-full">{description}</div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      className={twMerge(
        "flex relative flex-col lg:ml-[32px] p-4 rounded-xl gap-4 hover:!opacity-100 hover:outline outline-1 outline-white/25 hover:bg-white/10 hover:shadow-lg parent group scrollCustom",
        className
      )}
    >
      <div className="flex gap-4 h-32 xl:h-40 max-h-[33svh] overflow-y-clip">
        <div className="">
          <LazyLoadImage src={image} placeholder={<PlaceholderImage className="max-h-full max-w-none" />} className="max-h-full max-w-none" />
        </div>
        <div className="flex items-start flex-col">
          <h3 className="transition-colors text-white font-semibold leading-tight text-p24Clamp xl:text-h2Clamp xl:leading-loose group-[.parent]:group-hover:text-emerald-400">
            {title}
            <Link className="absolute w-5 h-5 top-1 right-1 lg:top-5 lg:right-5 link" />
          </h3>
          <div className="flex gap-2 flex-wrap max-h-[16svh]">
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
