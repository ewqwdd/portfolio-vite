
interface AboutSectionProps {
    margin?: number
}

export default function AboutSection({margin}: AboutSectionProps) {
  return (
    <section
      id="About"
      className="pt-[3svh] lg:pt-[10svh] max-lg:px-3"
      style={{
        marginLeft: margin,
      }}
    >
        <h2 className="text-h2Clamp font-bold">
            About me:
        </h2>
      <p className="text-p20Clamp max-[520px]:text-p18Clamp leading-snug font-extralight mt-2 lg:mt-4">
        I started learning programming with C++ in 2022, then explored Python.
        In the summer of 2023, I got into web development with Javascript. I
        {"'"}ve spent the last six months improving my skills and working on
        different projects. Recently, I{"'"}ve been freelancing for two months.
        Though I haven{"'"}t worked on commercial projects in a team, I{"'"}m
        eager for new challenges and believe I can contribute effectively to
        your team.
      </p>
    </section>
  );
}
