import { Suspense, useEffect, useState } from "react";
import { useScreen } from "../../../lib/hooks/useScreen";
import Spinner from "../../Spinner/Spinner";
import { Project, ProjectFetched, fetchData } from "../model/config";
import ProjectMobileAsync from "./ProjectMobile/ProjectMobile.async";
import ProjectMobileLoader from "./ProjectMobile/ProjectMobileLoader";
import ProjectAsync from "./Project/Project.async";
import ProjectLoader from "./Project/ProjectLoader";
import ProjectSmallMobileAsync from "./ProjectSmallMobile/ProjectSmallMobile.asynct";
import ProjectSmallLoader from "./ProjectSmallMobile/ProjectSmallLoader";
import "./Project.css";

const perPage = 3;

interface ProjectSectionProps {
  countWidth?: boolean;
  tablet?: boolean;
  mobile?: boolean;
}

export default function ProjectSection({ countWidth, mobile }: ProjectSectionProps) {
  const { width } = useScreen();
  const [projects, setProjects] = useState<ProjectFetched[]>([]);
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    fetchData()
      .then((data) => {
        setProjects(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  let Cmp: typeof ProjectMobileAsync;
  let Loader: typeof ProjectMobileLoader;
  if (!width) {
    return <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />;
  }
  if (mobile) {
    if (width <= 460) {
      Cmp = ProjectSmallMobileAsync;
      Loader = ProjectSmallLoader;
    } else {
      Cmp = ProjectMobileAsync;
      Loader = ProjectMobileLoader;
    }
  } else {
    Cmp = ProjectAsync;
    Loader = ProjectLoader;
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
      <div className="flex justify-between">
        <h2 className="text-h2Clamp font-bold">Projects:</h2>
        <div className="flex gap-2">
          {new Array(Math.ceil(projects.length / perPage)).fill(0).map((_, index) => (
            <button
              className="size-8 bg-zinc-400/60 rounded-lg text-white transition-all opacity-60 hover:opacity-90"
              disabled={index + 1 === page}
              onClick={() => setPage(index + 1)}
              style={{
                opacity: index + 1 === page ? "1" : undefined,
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="group flex flex-col gap-2 scrollCustom relative transition-all">
        <>
          {isLoading && !projects
            ? new Array(perPage).fill(0).map((_, index) => <Loader key={index} />)
            : null}
          {error && (
            <span className="text-red-500 font-semibold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {error}
            </span>
          )}
          {projects.slice((page - 1) * perPage, page * perPage).map((elem, index) => (
            <Suspense key={index} fallback={<Loader />}>
              <Cmp
                title={elem[0]}
                description={elem[1].replace(";", ",")}
                tags={elem[2].split(";")}
                href={elem[3]}
                image={elem[4]}
                className="group-hover:opacity-70 transition-all"
              />
            </Suspense>
          ))}
        </>
      </div>
    </section>
  );
}
