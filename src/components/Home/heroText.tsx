// src/components/HeroText.tsx
import Folder from '../../assets/HOME/hero/title/folder.svg';
import HeroTitile from './heroTitle';

// Deco (excluding shock & swirl)
import DecoBottomLeft from '../../assets/HOME/hero/deco/bottom_left.png';
import DecoBottomRight from '../../assets/HOME/hero/deco/bottom_right.png';
import DecoLeft from '../../assets/HOME/hero/deco/left.png';
import DecoRight from '../../assets/HOME/hero/deco/right.png';
import DecoTop from '../../assets/HOME/hero/deco/top.png';
import DecoTopLeft from '../../assets/HOME/hero/deco/top_left.png';
import DecoTopRight from '../../assets/HOME/hero/deco/top_right.png';

export default function HeroText() {
  return (
    <section className="relative py-12 isolate">
      {/* === FOREGROUND DECO OVERLAY (in front of folder) === */}
      <div
        className="
          pointer-events-none select-none
          absolute left-1/2 top-1/2 -translate-x-1/2
          translate-y-[18%] sm:translate-y-[16%] md:translate-y-[14%]
          lg:translate-y-[20%] xl:translate-y-[-5%]
          w-[80vw] md:w-[60vw] max-w-[1400px]
          z-0
        "
        style={{ aspectRatio: '2 / 1' }}
      >
        {/* Top center */}
        <img
          src={DecoTop}
          alt=""
          className="absolute"
          style={{
            left: '55%',
            top: '25%',
            transform: 'translate(-50%, -50%) translate(0%, -52%)',
            width: '90%',
          }}
        />
        {/* Bottom left */}
        <img
          src={DecoBottomLeft}
          alt=""
          className="absolute"
          style={{
            left: '18%',
            top: '100%',
            transform: 'translate(-50%, -50%) translate(-48%, 40%)',
            width: '40%',
          }}
        />
        {/* Bottom right */}
        <img
          src={DecoBottomRight}
          alt=""
          className="absolute"
          style={{
            left: '80%',
            top: '100%',
            transform: 'translate(-50%, -50%) translate(48%, 40%)',
            width: '50%',
          }}
        />

        {/* === NEW: Middle-right label === */}
        <div
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) translate(12%, 0%)', // nudge right
          }}
        >
          
          
        <span
          className="inline-block transform text-[#131F5E] whitespace-nowrap leading-none
                    text-base sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl
                    translate-x-[40%] sm:translate-x-[34%] md:translate-x-[38%] lg:translate-x-[50%] xl:translate-x-[120%]
                    translate-y-[10%] sm:translate-y-[12%] md:translate-y-[14%] lg:translate-y-[16%] xl:translate-y-[80%]"
          style={{ fontFamily: 'T8, sans-serif' }}
        >
          MEET MY WORKS
        </span>






        </div>
      </div>

      {/* === FOLDER (unchanged) — sits behind the three foreground decos === */}
      <img
        src={Folder}
        alt=""
        aria-hidden
        className="
          pointer-events-none select-none
          absolute left-1/2 top-1/2 -translate-x-1/2
          translate-y-[18%] sm:translate-y-[16%] md:translate-y-[14%]
          lg:translate-y-[20%] xl:translate-y-[1%]
          origin-center scale-90 md:scale-80 lg:scale-95
          -z-10
        "
      />

      {/* === BACKGROUND DECO OVERLAY (behind folder) === */}
      <div
        className="
          pointer-events-none select-none
          absolute left-1/2 top-1/2 -translate-x-1/2
          translate-y-[18%] sm:translate-y-[16%] md:translate-y-[14%]
          lg:translate-y-[20%] xl:translate-y-[-5%]
          w-[80vw] md:w-[60vw] max-w-[1400px]
          -z-20
        "
        style={{ aspectRatio: '2 / 1' }}
      >
        {/* Top-left */}
        <img
          src={DecoTopLeft}
          alt=""
          className="absolute"
          style={{
            left: '15%',
            top: '27%',
            transform: 'translate(-50%, -50%) translate(-48%, -40%)',
            width: '40%',
          }}
        />
        {/* Top-right */}
        <img
          src={DecoTopRight}
          alt=""
          className="absolute"
          style={{
            left: '90%',
            top: '5%',
            transform: 'translate(-50%, -50%) translate(48%, -40%)',
            width: '30%',
          }}
        />
        {/* Left side */}
        <img
          src={DecoLeft}
          alt=""
          className="absolute"
          style={{
            left: '1%',
            top: '80%',
            transform: 'translate(-50%, -50%) translate(-45%, 0%)',
            width: '30%',
          }}
        />
        {/* Right side */}
        <img
          src={DecoRight}
          alt=""
          className="absolute"
          style={{
            left: '99%',
            top: '65%',
            transform: 'translate(-50%, -50%) translate(45%, 0%)',
            width: '30%',
          }}
        />
      </div>

      {/* === HERO TITLE (front-most) — unchanged === */}
      <div
        className="relative z-10 mx-auto w-fit px-4
          pt-[10%] sm:pt-[50%] md:pt-[50%]
          lg:pt-[10%] xl:pt-[12%]
          origin-center scale-90 md:scale-100 lg:scale-140
        "
      >
        <HeroTitile />
      </div>
    </section>
  );
}
