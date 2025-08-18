// src/components/Home/heroText.tsx
import HeroTitle from "./heroTitle";

export default function HeroText() {
  return (
    <section id="HOME_hero" className="mx-auto max-w-[var(--page-max)] px-4 py-12">
      {/* Title component */}
      <HeroTitle />

      {/* You can add subtitle or other elements here */}
      <p className="mt-4 text-lg text-gray-600 text-center">
        A short tagline can go here.
      </p>
    </section>
  );
}
