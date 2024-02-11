import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../App.css";
import BG from "../../bg-long.jpg";
import StickyProfile from "../../components/StickyProfile/StickyProfile";
import MarginWrapperFirstPage from "../../components/MarginWrapperFirstPage/MarginWrapperFirstPage";
import { ProjectSection } from "../../components/ProjectsSection";
import {
  MutableRefObject,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContactSectionAsync from "../../components/ContactSection/ContactSection.async";
import ContactSectionLoader from "../../components/ContactSection/ContactSectionLoader";
import { useScreen } from "../../lib/hooks/useScreen";

export default function MainDesktop() {
  const entity = useRef() as MutableRefObject<IParallax>;
  const goTo = useCallback(
    (num: number) => () => entity.current.scrollTo(num + 0.01),
    []
  );
  const [, setIsMounted] = useState<boolean>(false);
  const { height } = useScreen();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <Parallax
      ref={entity}
      pages={2}
      className="text-white/80"
      style={{
        maxHeight: window.innerHeight * 2.4,
      }}
    >
      <ParallaxLayer
        className="!bg-cover !bg-no-repeat !bg-center"
        offset={0}
        speed={1}
        factor={3}
        style={{
          background: `url(${BG})`,
        }}
      />

      <ParallaxLayer offset={0} factor={1} speed={1.5} className="select-none">
        <LazyLoadImage
          src="/rocket.png"
          className="h-28 blur-[1px] opacity-75 absolute top-[75%] left-[60%]"
        />
        <LazyLoadImage
          src="/rocket.png"
          className="h-20 blur-[2px] opacity-60 absolute top-[25%] left-[90%]"
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.5}
        factor={1.5}
        speed={2}
        className="pointer-events-none select-none"
      >
        <LazyLoadImage
          src="/light.png"
          className="h-20 blur-[18px] absolute top-[75%] left-[60%] star"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-64 blur-[12px] absolute top-[25%] left-[90%] starSlow"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-48 blur-[22px] absolute top-[80%] left-[10%] starSuperSlow"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-36 blur-[14px] absolute top-[20%] left-[30%] starSuperSlow"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-10 blur-[8px] absolute top-[5%] left-[54%] star"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-40 blur-[14px] absolute top-[0%] -translate-x-12 left-0 starSlow"
        />
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{
          start: 0,
          end: 2.4,
        }}
        style={{
          maxWidth: "46%",
          marginLeft: "auto",
        }}
      >
        <StickyProfile goTo={goTo} entity={entity.current} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        factor={0.8}
        speed={0.5}
        style={{
          maxWidth: "50%",
        }}
      >
        <MarginWrapperFirstPage />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.8}
        factor={2}
        speed={0.5}
        style={{
          maxWidth: "50%",
        }}
      >
        <ProjectSection countWidth />
        <Suspense fallback={<ContactSectionLoader />}>
          <ContactSectionAsync countWidth oneLine={Number(height) < 720} />
        </Suspense>
      </ParallaxLayer>
    </Parallax>
  );
}
