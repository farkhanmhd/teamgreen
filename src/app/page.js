import HeroSection from './ui/sections/HeroSection';
import ContextSection from './ui/sections/ContextSection';
import SolutionSection from './ui/sections/SolutionSection';
import BenefitsSection from './ui/sections/BenefitsSection';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <ContextSection />
      <SolutionSection />
      <BenefitsSection />
    </main>
  );
}
