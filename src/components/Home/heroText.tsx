import HeroTitle from "./heroTitle";

export default function HeroText() {
  return (
    <section id="HOME_hero" className="relative mx-auto max-w-[var(--page-max)] px-4 py-12">
      <div className="relative z-10">
        <HeroTitle />
      </div>

      <p className="mt-4 text-4xl text-gray-600 text-center" style={{ fontFamily: "T8" }}>
        MEET MY WORK.
      </p>
    </section>
  );
}
