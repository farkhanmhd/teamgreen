import HeroSection from './ui/components/HeroSection';
import ContextSection from './ui/components/ContextSection';

export default function Home() {
  return (
    <main className="bg-white px-[30px] lg:px-[50px] xl:px-[70px]">
      <HeroSection />
      <ContextSection />
    </main>
  );
}
