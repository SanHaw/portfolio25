import HeroTitle from "./heroTitle";

import decoBottomLeft from "../../assets/HOME/hero/deco/bottom_left.png";
import decoBottomRight from "../../assets/HOME/hero/deco/bottom_right.png";
import decoLeft from "../../assets/HOME/hero/deco/left.png";
import decoRight from "../../assets/HOME/hero/deco/right.png";
import decoShock from "../../assets/HOME/hero/deco/shock.svg";
import decoTop from "../../assets/HOME/hero/deco/top.png";
import decoTopLeft from "../../assets/HOME/hero/deco/top_left.png";
import decoTopRight from "../../assets/HOME/hero/deco/top_right.png";
import folderUrl from "../../assets/HOME/hero/title/folder.svg";

export default function HeroText() {
  return (
    <section
      id="HOME_hero"
      className="relative mx-auto max-w-[var(--page-max)] px-4 py-12"
    >
      {/* ===== Main Title ===== */}
    <div className="relative z-10 translate-y-[33svh]">
        <HeroTitle />
    </div>

      {/* ===== Subtitle (always in front) ===== */}
    <p
    className="relative z-50 mt-8 w-fit mx-auto
                translate-y-[3.5em] translate-x-[5em]
                text-center text-gray-600 leading-[0.95]"
    style={{ fontFamily: "T8", fontSize: "clamp(32px, 7vw, 110px)" }}
    >
    MEET MY WORK
    </p>


      {/* ================== DECORATIONS (all em, no outlines) ================== */}

      {/* TOP – centered above the title */}
      <img
        src={decoTop}
        alt=""
        className="
          pointer-events-none select-none absolute z-20
          left-[2.5em] top-[1.15em] w-[80em] h-auto
        "
      />

      {/* TOP RIGHT */}
      <img
        src={decoTopRight}
        alt=""
        className="
          pointer-events-none select-none absolute z-20
          right-[-25em] top-[5em] w-[27em] h-auto
        "
      />

      {/* TOP LEFT */}
      <img
        src={decoTopLeft}
        alt=""
        className="
          pointer-events-none select-none absolute z-20
          left-[-30.7em] top-[4.1em] w-[39em] h-auto
        "
      />

      {/* LEFT (slides behind folder on mobile) */}
      <img
        src={decoLeft}
        alt=""
        className="
          pointer-events-none select-none absolute md:z-20 -z-10
          left-[-30.1em] top-[28em] w-[26em] h-auto
          md:translate-y-0 translate-y-[10em] transition-transform duration-500
        "
      />

      {/* RIGHT (slides behind folder on mobile) */}
      <img
        src={decoRight}
        alt=""
        className="
          pointer-events-none select-none absolute md:z-20 -z-10
          -right-[32em] top-[25em] w-[27em] h-auto
          md:translate-y-0 translate-y-[10em] transition-transform duration-500
        "
      />

      {/* BOTTOM LEFT (slides behind folder on mobile) */}
      <img
        src={decoBottomLeft}
        alt=""
        className="
          pointer-events-none select-none absolute md:z-20 -z-10
          -left-[23em] -bottom-[53em] w-[30em] h-auto
          md:translate-y-0 translate-y-[8em] transition-transform duration-500
        "
      />

      {/* BOTTOM RIGHT (slides behind folder on mobile) */}
      <img
        src={decoBottomRight}
        alt=""
        className="
          pointer-events-none select-none absolute md:z-20 -z-10
          -right-[33em] -bottom-[61em] w-[50em] h-auto
          md:translate-y-0 translate-y-[8em] transition-transform duration-500
        "
      />

      {/* wrapper keeps position & translate */}
<div
  className="
    pointer-events-none select-none absolute md:z-20 -z-10
    -right-[20em] -bottom-[38em] w-[13em]
    md:translate-y-0 translate-y-[8em]
    transition-transform duration-500 transform-gpu
  "
>
  {/* inner image spins */}
  <img
    src={decoShock}
    alt=""
    className="block w-full h-auto spin-slow"
    style={{ transformOrigin: "center" }}
  />
</div>


      {/* Mobile folder overlay (top half a bit below center) */}
      <img
        src={folderUrl}
        alt=""
        className="
            pointer-events-none select-none absolute -z-20 md:hidden
            left-1/2 -translate-x-1/2 top-[28em]
            w-[80em] h-auto
        "
    />

    </section>
  );
}
