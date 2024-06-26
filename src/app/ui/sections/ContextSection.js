'use client';

import gsap from 'gsap';
import { useAtomValue } from 'jotai';
import { darkModeAtom } from '@/app/states/state';
import { useGSAP } from '@gsap/react';
import SplitLetter from '../components/SplitLetter';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const ContextSection = () => {
  const darkMode = useAtomValue(darkModeAtom);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.context-letter', {
      color: '#0C9463',
      stagger: 0.025,
      scrollTrigger: {
        trigger: '#context',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });
  }, [darkMode]);

  return (
    <section
      className="px-[30px] py-[110px] duration-200 lg:px-[50px] xl:px-[70px] dark:bg-black dark:text-white"
      id="context"
    >
      <p className="mx-auto flex w-full flex-wrap gap-x-1.5 text-lg font-medium leading-tight text-zinc-400 lg:gap-x-6 lg:text-5xl xl:w-9/12">
        <SplitLetter className="context-letter">
          Choosing sustainability is essential for our planet’s health. We can
          make a difference by using renewable resources, saving water, and
          reducing waste, leading to a greener future. Advancements in
          technology are key to a sustainable path. They help us use less, save
          more, and lower emissions, moving us towards a fossil-free world.
          Achieving a cleaner planet requires everyone’s effort. From local
          initiatives to global movements, collective action can drive
          significant environmental progress.
        </SplitLetter>
      </p>
    </section>
  );
};

export default ContextSection;
