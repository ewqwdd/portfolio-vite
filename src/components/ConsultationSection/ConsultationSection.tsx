import { useState } from "react";

interface AboutSectionProps {
  margin?: number;
}

const appTypes = ["AI/ML/CV/ChatGPT", "Веб-застосунки", "Мобільні додатки"];

export default function ConsultationSection({ margin }: AboutSectionProps) {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="About"
      className="mt-[2svh] lg:mt-[7svh] p-[1svh] max-lg:px-3 max-sm:py-10"
      style={{
        marginLeft: margin,
      }}
    >
      <div className="flex">
        {appTypes.map((elem, index) => (
          <button
            className="text-p20Clamp text-emerald-500 py-1 px-3 border border-solid rounded-t-md transition-all border-b-2 max-sm:text-p16Clamp max-sm:p-1"
            style={{
              backgroundColor:
                selected === index ? "rgba(255, 255, 255, 0.1)" : "transparent",
              borderColor:
                selected === index ? "rgba(255, 255, 255, 0.1)" : "transparent",
            }}
            onClick={() => setSelected(index)}
            key={index}
          >
            {elem}
          </button>
        ))}
      </div>
      <div className="flex flex-col mt-1">
        <h2 className="text-h2Clamp font-semibold max-sm:mt-5">
          Консультації та розробка програмного забезпечення
        </h2>

        <p className="text-p16Clamp max-[520px]:text-p16Clamp leading-snug font-extralight mt-2 lg:mt-4 text-white/70">
          Автоматизуйте операції вашого бізнесу з нашими індивідуальними
          рішеннями на основі штучного інтелекту (AI), машинного навчання (ML)
          та системи ChatGPT, щоб зекономити час, зменшити помилки та підвищити
          ефективність. Вивільніть ваші ресурси для прийняття прибуткових
          рішень, насолоджуючись збільшеною точністю та продуктивністю.
        </p>
      </div>
    </section>
  );
}
