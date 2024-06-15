'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';
import Image from 'next/image';
import SplitWord from '../components/SplitWord';
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

    if (isDesktop) {
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
          xPercent: 100,
        });
    } else {
      timeline
        .from('#hero-image', {
          opacity: 0,
          yPercent: -100,
          delay: isFirstLoad && 3,
        })
        .from('.hero-title', {
          yPercent: -100,
        })
        .from('.hero-subtitle', {
          yPercent: -100,
        });
    }
  });
  return (
    <section className="flex h-[100dvh] w-full flex-col justify-center gap-y-8 bg-transparent px-[30px] pt-[110px] font-medium lg:gap-y-0 lg:px-[50px] lg:pt-0 xl:flex-row xl:items-center xl:justify-between xl:px-[70px]">
      <div className="flex w-full overflow-hidden lg:h-[60%] xl:order-2 xl:h-auto xl:max-w-[456px]">
        <Image
          id="hero-image"
          src="/images/hero.png"
          alt="hero image"
          width={456}
          height={456}
          className="m-auto"
        />
      </div>
      <div className="xl:order-1 xl:max-w-[60%]">
        <h1 className="mb-5 flex flex-wrap gap-x-3 text-md leading-tight sm:text-lg md:text-2xl lg:gap-x-6 lg:text-5xl">
          <SplitWord className="hero-title">
            Discover the Sustainable Path to a Cleaner Planet
          </SplitWord>
        </h1>
        <p className="flex flex-wrap gap-x-1.5 font-normal lg:text-base">
          <SplitWord className="hero-subtitle">
            Embracing Eco-Friendly Innovations for Future Generations
          </SplitWord>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
