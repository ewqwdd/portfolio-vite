import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps {
  children: ReactNode;
  className?: string
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span className={twMerge("px-2 py-[5px] max-[550px]:py-[3px] max-[550px]:px-1 max-[360px]:py-[2px] max-[360px]:text-[10px] max-[550px]:text-[14px] text-[15px] xl:text-[18px] transition-colors bg-emerald-500 text-white hover:bg-emerald-600 rounded-full", className)}>
      {children}
    </span>
  );
}
