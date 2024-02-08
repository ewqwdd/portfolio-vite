
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useRef } from "react";
import { animated, config, useSpring } from "@react-spring/web";
import PreviewSlider from "./PreviewSlider";

interface PreviewSliderProps {
  className?: string;
}

export default function PreviewSliderDesktop({ className }: PreviewSliderProps) {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!wrapperRef.current) return
      const objX = wrapperRef.current?.offsetLeft + (wrapperRef.current?.offsetWidth / 2) + (window.innerWidth * 0.54)
      const objY = wrapperRef.current?.offsetTop + (wrapperRef.current?.offsetHeight / 2)
      api.start({
        y: objX - e.x > 240 ? 240 : (objX - e.x),
        x: e.y - objY < -240 ? -240 : (e.y - objY),
        config: config.gentle
      })
    }
    window.addEventListener('mousemove', handleMouse)

    return () => {
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [api])

  const rotateX = x.to(x => `${360 - (x / 30)}deg`)
  const rotateY = y.to(y => `${360 - (y / 30)}deg`)
  return (
    <animated.div 
    ref={wrapperRef}
    style={{
      transform: 'perspective(1000px)',
      rotateX,
      rotateY
    }}>
      <PreviewSlider className={className} />
    </animated.div>
  );
}
