// src/components/DualHello.tsx
import Hello from '../../assets/HOME/hero/title/hello.svg';
import Star from '../../assets/HOME/hero/title/Star.svg';
import World from '../../assets/HOME/hero/title/world.svg';

export default function HeroTitle() {
  return (
    <section className="w-full py-8">
      {/* Center the whole group */}
      <div className="mx-auto w-fit px-4">
        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Hello + spinning star */}
          <div className="relative">
            <img
              src={Star}
              alt=""
              aria-hidden
              className="spin-slow absolute top-1/2 left-[90%]
                        -translate-x-1/2 -translate-y-1/2
                        w-[115%] max-w-none pointer-events-none select-none -z-10"
            />
            <img
              src={Hello}
              alt="Hello"
              className="block mx-auto w-[clamp(12rem,40vw,22rem)] h-auto"
            />
          </div>

          {/* World (stacks under Hello on mobile) */}
          <img
            src={World}
            alt="World"
            className="block mx-auto w-[clamp(12rem,40vw,22rem)] h-auto md:pt-3"
          />
        </div>
      </div>
    </section>
  );
}
