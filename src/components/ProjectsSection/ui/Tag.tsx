import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-2 py-[5px] leading-none text-[15px] xl:text-[18px] transition-colors bg-emerald-500 text-white hover:bg-emerald-600 rounded-full">
      {children}
    </span>
  );
}
