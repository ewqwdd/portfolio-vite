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
      <h2 className="text-h2Clamp font-bold">About me:</h2>
      <p className="text-p20Clamp max-[520px]:text-p18Clamp leading-snug font-extralight mt-2 lg:mt-4">
        Looking for a talented developer to bring your ideas to life? I{"'"}m your
        person. I specialize in Frontend development, software development,
        optimization, cross-browser web applications, and open APIs integration.
        From analyzing tasks to delivering a simple, usable end product, I{"'"}ve
        got the developing cycle covered. Let{"'"}s work together to turn your ideas
        into reality.
      </p>
    </section>
  );
}
