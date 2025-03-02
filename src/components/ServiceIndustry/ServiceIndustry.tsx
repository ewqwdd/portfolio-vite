import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useScreen } from "../../lib/hooks/useScreen";
import Spinner from "../Spinner/Spinner";
import { useRef, useState } from "react";

interface ServiceSlide {
  label: string;
  img?: string;
}

const services: ServiceSlide[] = [
  {
    label: "Фінтех",
  },
  {
    label: "Нерухомість",
  },
  {
    label: "Електронна комерція",
  },
  {
    label: "Послуги на вимогу",
  },
  {
    label: "Їжа та продукти",
  },
];

interface ServiceIndustryProps {
  countWidth?: boolean;
}

export default function ServiceIndustry({ countWidth }: ServiceIndustryProps) {
  const { width } = useScreen();
  const swiperRef = useRef<SwiperRef | null>(null);
  const [slide, setSlide] = useState<number>(0);

  if (!width) {
    return (
      <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    );
  }

  const onNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const margin = width >= 1310 ? (width - 1280) / 2 : 12;

  return (
    <section
      id="Services"
      className="mt-[4svh] max-lg:px-3 scrollCustom"
      style={{
        marginLeft: countWidth ? margin : 0,
      }}
    >
      <h2 className="text-h2Clamp font-bold">Галузі обслуговування</h2>

      <div className="mt-3 flex items-center justify-between max-sm:max-w-full max-sm:overflow-x-auto max-sm:gap-4">
        {services.map((service, index) => (
          <button
            key={index}
            className={
              "text-p16Clamp font-medium transition-all leading-7 max-sm:whitespace-nowrap " +
              (slide === index ? "text-emerald-400 " : "")
            }
            onClick={() => swiperRef.current?.swiper.slideTo(index)}
          >
            {service.label}
          </button>
        ))}
      </div>

      <Swiper
        ref={swiperRef}
        onSlideChange={(swiper) => setSlide(swiper.activeIndex)}
        grabCursor={true}
        navigation={false}
        direction="vertical"
        modules={[Pagination, Navigation]}
        className={
          "mySwiper mt-[3svh] aspect-video max-[520px]:w-[84%] lg:!mr-0 w-full"
        }
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex items-center">
            <img
              src={service.img}
              alt={service.label}
              className="aspect-video bg-black/20 rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <button
          style={{
            fontFamily: "swiper-icons",
            fontVariant: "initial",
          }}
          onClick={onNextClick}
          className="text-emerald-500 text-[32px] rotate-90"
        >
          next
        </button>
      </div>
      <p className="text-p16Clamp font-light text-white/80">
        Наше програмне забезпечення для нерухомості сприяє зручності для
        користувачів, оптимізує операції, покращує взаємодії з клієнтами та
        допомагає вам лідерувати в конкурентному технологічному світі. З понад
        10-річним досвідом і понад 300 успішними проектами ми надаємо професійну
        консультацію та віддані розробницькі команди.
      </p>
    </section>
  );
}
