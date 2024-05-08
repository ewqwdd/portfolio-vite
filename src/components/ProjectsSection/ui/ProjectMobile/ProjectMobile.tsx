import { twMerge } from "tailwind-merge";
import { Project } from "../../model/config";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "../../../../assets/external-link.svg?react";
import TagsSwiper from "../TagsSwiper";
import PlaceholderImage from "../../../PlaceholderImage/PlaceholderImage";

interface ProjectCompProps extends Project {
  className?: string;
}

export default function ProjectMobile({
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
      <p className="lg:text-p20Clamp max-lg:text-p16Clamp max-[440px]:text-[13px] leading-tight font-light" dangerouslySetInnerHTML={{__html: description}} />
    );
  } else {
    descriptionWrapper = (
      <div className="lg:text-p20Clamp max-lg:text-p16Clamp max-[440px]:text-[13px] leading-tight font-light">
        {description}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      className={twMerge(
        "flex flex-col relative lg:ml-[32px] p-4 rounded-xl gap-1 hover:!opacity-100 hover:outline outline-1 outline-white/25 hover:bg-white/10 hover:shadow-lg parent group",
        className
      )}
    >
      <div className="flex gap-2 pr-2 max-w-full">
        <h3 className="transition-colors flex-shrink-0 min-w-[33%] grow text-nowrap text-white font-semibold leading-tight text-p24Clamp xl:text-h2Clamp xl:leading-loose group-[.parent]:group-hover:text-emerald-400">
          {title}
        </h3>
        <div className="overflow-x-auto">
          <TagsSwiper tags={tags} />
        </div>
      </div>
      <div className="flex items-start gap-2">
        <LazyLoadImage src={image} placeholder={<PlaceholderImage className="aspect-video w-1/3" />} className='w-1/3 aspect-video'/>
        {descriptionWrapper}
      </div>
      <Link className="absolute w-5 h-5 top-0.5 right-0.5 link" />
    </a>
  );
}
