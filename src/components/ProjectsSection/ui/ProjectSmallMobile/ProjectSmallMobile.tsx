import { twMerge } from "tailwind-merge";
import { Project } from "../../model/config";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "../../../../assets/external-link.svg?react";
import Tag from "../Tag";
import PlaceholderImage from "../../../PlaceholderImage/PlaceholderImage";
import { useScreen } from "../../../../lib/hooks/useScreen";

interface ProjectCompProps extends Project {
  className?: string;
}

export default function ProjectSmallMobile({
  image,
  tags,
  title,
  description,
  href,
  className,
}: ProjectCompProps) {
  let descriptionWrapper;
  const { height } = useScreen();
  if (typeof description === "string") {
    descriptionWrapper = (
      <p className="text-[13px] leading-tight font-light">{description}</p>
    );
  } else {
    descriptionWrapper = (
      <div className="text-[13px] leading-tight font-light">{description}</div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      className={twMerge(
        "flex flex-col relative p-3 rounded-md hover:!opacity-100 hover:outline outline-1 outline-white/25 hover:bg-white/10 hover:shadow-lg parent group scrollCustom border-emerald-600 border-b-2 rounded-b-none",
        className
      )}
    >
      <LazyLoadImage
        src={image}
        placeholder={
          <PlaceholderImage className="max-h-[10svh] overflow-clip aspect-video w-full object-cover" />
        }
        className="max-h-[10svh] overflow-clip aspect-video w-full object-cover"
      />
      {height && height >= 720 ? (
        <div className="flex gap-1 overflow-x-auto pb-0.5 mt-2">
          {tags.map((elem, index) => (
            <Tag key={index}>{elem}</Tag>
          ))}
        </div>
      ) : null}
      <h3 className="transition-colors min-w-[33%] grow text-nowrap text-emerald-50 font-semibold leading-tight text-p24Clamp  group-[.parent]:group-hover:text-emerald-400">
        {title}
      </h3>
      {descriptionWrapper}
      <Link className="absolute w-3 h-3 top-1 right-1 link" />
    </a>
  );
}
