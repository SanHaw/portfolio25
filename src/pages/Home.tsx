// src/pages/Home.tsx
import HeroText from "../components/Home/heroText";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <HeroText />

      {/* Add more page content below */}
      <div className="mt-12 text-center">
        <p>Welcome to the homepage!</p>
      </div>
    </main>
  );
}
