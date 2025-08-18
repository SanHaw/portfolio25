// src/components/Home/heroTitle.tsx
import starUrl from "../../assets/HOME/hero/title/Star.svg";

type Props = {
  sizeClass?: string;
  colorClass?: string;
  align?: "left" | "center" | "right";
  spaceWidth?: string | number;
};

export default function HeroTitle(props: Props) {
  const {
    sizeClass = "text-[clamp(72px,18vw,250px)]", // ← was 48px,12vw,160px
    colorClass = "text-[#0f2746]",
    align = "center",
    spaceWidth = "0.6em",
  } = props;

  const justify =
    align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start";

  const base = `inline-block align-baseline leading-none ${sizeClass} ${colorClass}`;

  return (
    <div className="w-full">
      <div className={`relative isolate flex flex-nowrap ${justify}`}>
        <span className={`${base} ml-[0rem] mr-[0.5rem] mt-[0rem] mb-[0rem]`} style={{ fontFamily: "Title" }}>H</span>
        <span className={`${base} ml-[0.25rem] mr-[0.25rem] mt-[-.5rem] mb-[0rem]`} style={{ fontFamily: "T4" }}>e</span>
        <span className={`${base} ml-[-.250rem] mr-[0.5rem] mt-[0rem] mb-[0rem]`} style={{ fontFamily: "Title" }}>l</span>
        <span className={`${base} ml-[1.5rem] mr-[1rem] mt-[1.5rem] mb-[0rem]`} style={{ fontFamily: "T5" }}>l</span>

        {/* o with star anchored behind it */}
        <span className="relative inline-flex align-baseline leading-none">
          <img
            src={starUrl}
            alt=""
            className="
              pointer-events-none absolute -z-10
              left-1/2 top-1/2 translate-x-[calc(-50%+0.13em)] -translate-y-1/2
              w-[45em] h-auto spin-slow
            "
          />
          <span className={`${base}`} style={{ fontFamily: "Title" }}>o</span>
        </span>

        <span className="inline-block" style={{ width: spaceWidth }} />

        <span className={`${base} ml-[4rem] -mr-[1rem] mt-[-0.5rem] mb-[0rem]`} style={{ fontFamily: "T4" }}>W</span>
        <span className={`${base} -ml-[3rem] mr-[0.25rem] mt-[1rem] mb-[0rem]`} style={{ fontFamily: "Title" }}>o</span>
        <span className={`${base} ml-[0rem] mr-[0rem] mt-[1rem] mb-[0rem]`} style={{ fontFamily: "Body" }}>r</span>
        <span className={`${base} ml-[-0.25rem] mr-[0.5rem] mt-[1rem] mb-[0rem]`} style={{ fontFamily: "Title" }}>l</span>
        <span className={`${base} ml-[0.25rem] mr-[0rem] mt-[-.5rem] mb-[0rem]`} style={{ fontFamily: "T6" }}>d</span>
      </div>
    </div>
  );
}
