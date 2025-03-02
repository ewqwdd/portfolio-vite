import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../../App.css";
import BG from "../../bg-long.jpg";
import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MobileProfile from "../../components/MobileProfile/MobileProfile";
import AboutSection from "../../components/AboutSection/AboutSection";
import { useScreen } from "../../lib/hooks/useScreen";
import Spinner from "../../components/Spinner/Spinner";
import ContactSectionAsync from "../../components/ContactSection/ContactSection.async";
import ContactSectionLoader from "../../components/ContactSection/ContactSectionLoader";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import { ServiceIndustry } from "../../components/ServiceIndustry";
import { CoopModel } from "../../components/CoopModel";

export default function MainDesktop() {
  const { height } = useScreen();

  const entity = useRef() as MutableRefObject<IParallax>;
  const [, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!height) {
    return (
      <div className="h-[100svh] w-[100svh] flex justify-center items-center">
        <Spinner className="w-10 h-10" />
      </div>
    );
  }
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

      <ParallaxLayer offset={0} factor={1} speed={1.5}>
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
        className="pointer-events-none"
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

      <ParallaxLayer offset={0} factor={0.4} speed={0.5}>
        <MobileProfile />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} factor={0.8} speed={0.5} className="px-10">
        <AboutSection />
        <ConsultationSection />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.99}
        factor={1.4}
        speed={0.5}
        className="flex flex-col px-10"
        style={{
          marginTop: 100,
        }}
      >
        <ServiceIndustry />
        <CoopModel />
        <Suspense fallback={<ContactSectionLoader />}>
          <ContactSectionAsync />
        </Suspense>
      </ParallaxLayer>
    </Parallax>
  );
}
