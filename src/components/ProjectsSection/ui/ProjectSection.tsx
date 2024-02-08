import { Suspense } from "react";
import { useScreen } from "../../../lib/hooks/useScreen";
import Spinner from "../../Spinner/Spinner";
import { projects } from "../model/config";
import ProjectMobileAsync from "./ProjectMobile/ProjectMobile.async";
import ProjectMobileLoader from "./ProjectMobile/ProjectMobileLoader";
import ProjectAsync from "./Project/Project.async";
import ProjectLoader from "./Project/ProjectLoader";
import ProjectSmallMobileAsync from "./ProjectSmallMobile/ProjectSmallMobile.asynct";
import ProjectSmallLoader from "./ProjectSmallMobile/ProjectSmallLoader";

interface ProjectSectionProps {
  countWidth?: boolean;
  tablet?: boolean;
  mobile?: boolean;
}

export default function ProjectSection({
  countWidth,
  mobile,
}: ProjectSectionProps) {
  const { width } = useScreen();
  let Cmp: typeof ProjectMobileAsync
  let Loader: typeof ProjectMobileLoader
  if (!width) {
    return (
      <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    );
  }
  if (mobile) {
    if (width <= 460) {
      Cmp = ProjectSmallMobileAsync
      Loader = ProjectSmallLoader
    }
    else {
      Cmp = ProjectMobileAsync
      Loader = ProjectMobileLoader
    }
  } else {
    Cmp = ProjectAsync
    Loader = ProjectLoader
  }
  const margin = width >= 1310 ? (width - 1280) / 2 : 12;
  return (
    <section
      id="Projects"
      className="mt-[4svh] max-lg:px-3"
      style={{
        marginLeft: countWidth ? margin : 0,
      }}
    >
      <h2 className="text-h2Clamp font-bold">Projects:</h2>
      <div className="group flex flex-col gap-2 scrollCustom">
      <>
          {projects.map((elem, index) => (
            <Suspense key={index} fallback={<Loader />}>
            <Cmp
              {...elem}
              className="group-hover:opacity-70 transition-all"
            />
            </Suspense>
          ))}
        </>
      </div>
    </section>
  );
}
