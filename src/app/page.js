import HeroSection from './ui/sections/HeroSection';
import ContextSection from './ui/sections/ContextSection';
import SolutionSection from './ui/sections/SolutionSection';

export default function Home() {
  return (
    <main className="h-[20000px] bg-white">
      <HeroSection />
      <ContextSection />
      <SolutionSection />
    </main>
  );
}
