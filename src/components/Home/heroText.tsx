import starUrl from "../../assets/HOME/hero/title/Star.svg"; // ← works immediately
import HeroTitle from "./heroTitle";

export default function HeroText() {
  return (
    <section
      id="HOME_hero"
      className="relative mx-auto max-w-[var(--page-max)] px-4 py-12"
    >
      {/* Spinning star behind the title */}
      <img
        src={starUrl}
        alt=""
        className="
            pointer-events-none select-none
            absolute -z-10
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[min(18vw,220px)] h-auto
            spin-slow
        "
        />

      {/* Title */}
      <div className="relative z-10">
        <HeroTitle />
      </div>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 text-center">
        A short tagline can go here.
      </p>
    </section>
  );
}
