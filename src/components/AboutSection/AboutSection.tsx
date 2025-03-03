interface AboutSectionProps {
  margin?: number;
}

export default function AboutSection({ margin }: AboutSectionProps) {
  return (
    <section
      id="About"
      className="pt-[3svh] lg:pt-[10svh] max-lg:px-3"
      style={{
        marginLeft: margin,
      }}
    >
      <h2 className="text-h2Clamp font-bold">Ласкаво просимо до Zonnda</h2>
      <p className="text-p20Clamp max-[520px]:text-p16Clamp leading-snug font-extralight mt-2 lg:mt-4 max-lg:text-p16Clamp">
        Ласкаво просимо до Zonnda - вашого надійного партнера у світі технологій
        та інновацій. Ми - провідна IT-компанія, яка обслуговує найбільшу
        юридичну компанію України, забезпечуючи високоякісні та сучасні рішення
        для бізнесу.
        <br />
        <br />
        Наші послуги охоплюють розробку потужних CRM систем, створення
        привабливих та функціональних веб-сайтів, а також розробку клієнтських
        додатків, що відповідають найвищим стандартам. Наша команда
        професіоналів використовує передові технології та інструменти, щоб
        забезпечити максимальну ефективність та задоволення потреб наших
        клієнтів.
        <br />
        <br />
        Ми в Zonnda віримо, що успіх наших клієнтів - це наш успіх. Саме тому ми
        докладаємо максимум зусиль, щоб кожен проект був виконаний на найвищому
        рівні.
      </p>
    </section>
  );
}
