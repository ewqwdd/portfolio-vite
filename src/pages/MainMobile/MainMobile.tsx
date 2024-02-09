import "../../App.css";
import BG from "../../bg-long.jpg";
import { ProjectSection } from "../../components/ProjectsSection";
import {Suspense } from "react";
import MobileProfile from "../../components/MobileProfile/MobileProfile";
import AboutSection from "../../components/AboutSection/AboutSection";
import { useScreen } from "../../lib/hooks/useScreen";
import Spinner from "../../components/Spinner/Spinner";
import SkillsSectionMobileAsync from "../../components/SkillsSection/SkillsSectionMobile.async";
import ContactSectionAsync from "../../components/ContactSection/ContactSection.async";
import ContactSectionLoader from "../../components/ContactSection/ContactSectionLoader";
// import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MainMobile() {
  const { height } = useScreen();

  if (!height) {
    return (
      <div className="h-[100svh] w-[100svh] flex justify-center items-center">
        <Spinner className="w-10 h-10" />
      </div>
    );
  }
  return (
    <main
      className="!bg-cover !bg-no-repeat !bg-center text-white/80 pb-10"
      style={{
        background: `url(${BG})`,
        maxHeight: window.innerHeight * 2.4,
      }}
    >
        {/* <LazyLoadImage
          src="/light.png"
          className="h-20 blur-[18px] absolute top-[75%] left-[60%] star"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-36 blur-[14px] absolute top-[20%] left-[30%] starSuperSlow"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-10 blur-[8px] absolute top-[50%] left-[54%] star"
        />
        <LazyLoadImage
          src="/light.png"
          className="h-40 blur-[14px] absolute top-[100%] -translate-x-12 left-0 starSlow"
        /> */}
      <MobileProfile />
      <AboutSection />
      <Suspense
        fallback={<div className="h-16 w-full bg-black/40 animate-pulse" />}
      >
        <SkillsSectionMobileAsync />
      </Suspense>

      <ProjectSection mobile />
      <Suspense fallback={<ContactSectionLoader />}>
        <ContactSectionAsync />
      </Suspense>
    </main>
  );
}
