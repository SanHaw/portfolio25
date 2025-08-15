import HeroTitle from '../components/Home/heroTitle.tsx';

export default function Home() {
  return (
    <section id="HOME_hero" className="mx-auto max-w-[var(--page-max)] px-4 py-12">
      <div>
        <div>
          <div>
        
        <HeroTitle/>
      </div></div></div>

      <div>
        <p className="mt-8 text-stone-700 max-w-2xl mx-auto text-center">
          Welcome to my portfolio.
        </p>
      </div>
    </section>
  );
}
