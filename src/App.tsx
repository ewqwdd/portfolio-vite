import { Suspense } from "react";
import "./App.css";
import { useScreen } from "./lib/hooks/useScreen";
import MainDesktopAsync from "./pages/MainDesktop/MainDesktop.async";
import MainTabletAsync from "./pages/MainTablet/MainTablet.async";
import FacebookLoader from "./components/FacebookLoader/FacebookLoader";
import MainMobileAsync from "./pages/MainMobile/MainMobile.async";

const loadingScreen = (
  <div className="h-screen w-screen bg-emerald-600/10 flex flex-col justify-center items-center">
    <div className="relative max-w-[520px]:text-[32px] text-h1Clamp bg-white/80 font-bold text-center">
      <h1 className="text-emerald-600/10 z-10 absolute select-none">
        Mykolai Skydan
      </h1>
      <h1 className="text-black">Mykolai Skydan</h1>
    </div>
    <FacebookLoader />
  </div>
);

function App() {
  const { width } = useScreen();

  if (!width) {
    return loadingScreen;
  }
  
  if (width < 520) {
    return (
      <Suspense fallback={loadingScreen}>
        <MainMobileAsync />
      </Suspense>
    );
  }
  if (width < 1024) {
    return (
      <Suspense fallback={loadingScreen}>
        <MainTabletAsync />
      </Suspense>
    );
  }
  return (
    <Suspense fallback={loadingScreen}>
      <MainDesktopAsync />
    </Suspense>
  );
}

export default App;
