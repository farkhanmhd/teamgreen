'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';
import Image from 'next/image';
import SplitWord from './SplitWord';
import { isDesktop } from '@/app/utils/utils';

const HeroSection = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.75,
        ease: 'power2.inOut',
      },
    });

    timeline
      .from('.hero-title', {
        yPercent: -100,
        delay: isFirstLoad && 3.5,
      })
      .from('.hero-subtitle', {
        yPercent: -100,
      })
      .from('#hero-image', {
        opacity: 0,
        yPercent: isDesktop() ? 0 : -100,
        xPercent: isDesktop() ? 100 : 0,
      });
  });
  return (
    <section className="z-10 flex h-[100dvh] w-full flex-col gap-y-8 pt-[110px] font-medium lg:gap-y-0 lg:pt-0 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex w-full overflow-hidden lg:h-[60%] xl:order-2 xl:h-auto xl:max-w-[456px]">
        <Image
          id="hero-image"
          src="/hero.png"
          alt="hero image"
          width={456}
          height={456}
          className="m-auto"
        />
      </div>
      <div className="xl:order-1 xl:max-w-[60%]">
        <h1 className="mb-5 flex flex-wrap gap-x-3 text-2xl leading-tight lg:gap-x-6 lg:text-5xl">
          <SplitWord className="hero-title">
            Discover the Sustainable Path to a Cleaner Planet
          </SplitWord>
        </h1>
        <p className="flex flex-wrap gap-x-1.5 lg:text-base">
          <SplitWord className="hero-subtitle">
            Embracing Eco-Friendly Innovations for Future Generations
          </SplitWord>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
