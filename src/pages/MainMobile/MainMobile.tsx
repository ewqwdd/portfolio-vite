import "../../App.css";
import BG from "../../bg-long.jpg";
import { Suspense } from "react";
import MobileProfile from "../../components/MobileProfile/MobileProfile";
import AboutSection from "../../components/AboutSection/AboutSection";
import { useScreen } from "../../lib/hooks/useScreen";
import Spinner from "../../components/Spinner/Spinner";
import ContactSectionAsync from "../../components/ContactSection/ContactSection.async";
import ContactSectionLoader from "../../components/ContactSection/ContactSectionLoader";
import ConsultationSection from "../../components/ConsultationSection/ConsultationSection";
import { CoopModel } from "../../components/CoopModel";
import { ServiceIndustry } from "../../components/ServiceIndustry";

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
      <MobileProfile />
      <AboutSection />
      <ConsultationSection />

      <ServiceIndustry />
      <CoopModel />
      <Suspense fallback={<ContactSectionLoader />}>
        <ContactSectionAsync />
      </Suspense>
    </main>
  );
}
