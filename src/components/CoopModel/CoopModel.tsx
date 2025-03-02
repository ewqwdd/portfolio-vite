import { useScreen } from "../../lib/hooks/useScreen";
import Spinner from "../Spinner/Spinner";

interface CoopModelProps {
  countWidth?: boolean;
}

interface CardType {
  title: string;
  desc: string;
  img: string;
}

const cards: CardType[] = [
  {
    title: "Розширення штату / ресурсів",
    desc: "Наша модель розширення штату призначена для допомоги компаніям знаходити необхідні навички для їх проектів.",
    img: "/images/CoopModel/Outsourcing.png",
  },
  {
    title: "Розробка продукту",
    desc: "Модель на основі проекту призначена для допомоги вам збудувати ваш продукт від ідеї до впровадження за допомогою команди досвідчених консультантів з програмної інженерії.",
    img: "/images/CoopModel/Outstaffing.png",
  },
  {
    title: "Відділена розробницька команда",
    desc: "Наша команда розробників має високу кваліфікацію та приділяє особливу увагу наданню якісних розробницьких послуг клієнтам.",
    img: "/images/CoopModel/Outstaffing.png",
  },
];

export default function CoopModel({ countWidth }: CoopModelProps) {
  const { width } = useScreen();

  if (!width) {
    return (
      <Spinner className="w-48 h-48v absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2" />
    );
  }

  const margin = width >= 1310 ? (width - 1280) / 2 : 12;

  return (
    <section
      id="About"
      className="mt-[2svh] lg:mt-[7svh] p-[1svh] max-lg:px-3 max-sm:mt-20"
      style={{
        marginLeft: countWidth ? margin : undefined,
      }}
    >
      <h2 className="text-h2Clamp font-bold">Моделі співпраці взаємодії </h2>
      <p className="text-white/60">
        Ми вирішуємо ваші найбільші бізнес-проблеми і допомагаємо вам досягти
        успіху. Ось як ми можемо працювати разом
      </p>
      <div className="flex flex-col mt-4 gap-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex gap-4 items-center p-3 bg-white/5 rounded-sm border border-white/10"
          >
            <img src={card.img} alt={card.title} className="size-14" />
            <div className="flex flex-col gap-2">
              <h3 className="text-white/80 text-p18Clamp font-semibold">
                {card.title}
              </h3>
              <p className="text-white/60 text-p16Clamp">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
