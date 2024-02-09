import { Suspense } from "react";
import ProfileMarqueAsync from "../ProfileMarque/ProfileMarque.async";
import MarqueeLoader from "../ProfileMarque/MarqueeLoader";
import PreviewSliderAsync from "../PreviewsSlider/PreviewSlider.async";

const SliderFallback = (<div className="mt-[3svh] max-w-[500px] max-h-[24svh] aspect-video max-[520px]:w-[84%] bg-white/15 mx-auto rounded-xl animate-pulse" />)

export default function StickyProfile() {

  return (
    <div className="pt-[5svh]">
      <h1 className="text-white text-[2rem] font-bold text-center leading-tight">
        Mykolai Skydan
      </h1>
      <h2 className="text-white/80 text-p16Clamp leading-none text-center">
        Fullstack developer
      </h2>
      <Suspense fallback={<MarqueeLoader />}>
        <ProfileMarqueAsync />
      </Suspense>
      <Suspense fallback={SliderFallback}>
        <PreviewSliderAsync className="max-w-[500px] max-h-[24svh]" mobile/>
      </Suspense>
      <p className="text-p20Clamp leading-none text-white/60 mt-6 text-center font-normal animate-pulse">
        Ready to translate ideas into code!
      </p>
    </div>
  );
}
