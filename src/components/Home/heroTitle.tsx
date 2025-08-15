// src/components/heroTitle.tsx

type Props = {
  sizeClass?: string;              // global size
  colorClass?: string;             // global color
  align?: "left" | "center" | "right";
  spaceWidth?: string | number;    // width between "Hello" and "World"
};

export default function HeroTitle({
  sizeClass = "text-[clamp(48px,12vw,160px)]",
  colorClass = "text-[#0f2746]",
  align = "center",
  spaceWidth = "0.6em",
}: Props) {
  const justify =
    align === "center" ? "justify-center" : align === "right" ? "justify-end" : "justify-start";

  // inline-block so margins apply horizontally; align-baseline keeps the letters sitting nicely
  const base = `inline-block align-baseline leading-none ${sizeClass} ${colorClass}`;

  return (
    <div className="w-full">
      <div className={`flex flex-wrap ${justify}`}>
        {/* H */}
        <span className={` ${base} ml-[0rem] mr-[0.5rem] mt-[0rem] mb-[0rem]`}
        style={{ fontFamily: "Title" }} >
          H
        </span>

        <span className={` ${base} ml-[0.25rem] mr-[0.25rem] mt-[-.5rem] mb-[rem]`}
        style={{ fontFamily: "T4" }}>
          e
        </span>

        <span className={` ${base} ml-[-.250rem] mr-[0rem] mt-[0rem] mb-[0rem]`}
        style={{ fontFamily: "Title" }} >
          l
        </span>

        {/* l */}
        <span className={` ${base} ml-[1rem] mr-[1rem] mt-[0.3rem] mb-[0rem]`}
        style={{ fontFamily: "T5" }}>
          l
        </span>

        <span className={` ${base} ml-[0rem] mr-[0rem] mt-[0rem] mb-[0rem]`}
          style={{ fontFamily: "Title" }} >
          o
        </span>


        {/* space between words (keep if you want extra gap independent of margins) */}
        <span className="inline-block" style={{ width: spaceWidth }} />


        <span className={` ${base} ml-[0rem] mr-[0.5rem] mt-[-0.5rem] mb-[0rem]`}
        style={{ fontFamily: "T4" }} >
          W
        </span>

        <span className={` ${base} ml-[-1.5rem] mr-[0.25rem] mt-[0rem] mb-[0rem]`}
        style={{ fontFamily: "Title" }} >
          o
        </span>

        <span className={` ${base} ml-[0rem] mr-[0rem] mt-[0rem] mb-[0rem]`}
        style={{ fontFamily: "Body" }} >
          r
        </span>

        <span className={` ${base} ml-[-0.25rem] mr-[0.5rem] mt-[0rem] mb-[0rem]`}
        style={{ fontFamily: "Title" }} >
          l
        </span>

        <span
          className={` ${base} ml-[0.25rem] mr-[0rem] mt-[-.5rem] mb-[0rem]`}
          style={{ fontFamily: "T6" }}
        >
          d
        </span>
      </div>
    </div>
  );
}
