'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useSetAtom } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';
import { isMobile } from '@/app/utils/utils';

const Intro = () => {
  const setFirstLoad = useSetAtom(firstLoadAtom);
  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'power2.inOut',
      },
    });

    timeline
      .to('#intro-logo', { opacity: 1 })
      .to('#green-text', { color: '#70EDDC' })
      .to('#intro-logo', {
        duration: 2,
        scale: isMobile ? 400 : 1000,
        xPercent: isMobile ? 7000 : 5500,
      });
    setTimeout(() => {
      setFirstLoad(false);
    }, 3000);
  });
  return (
    <div
      id="intro"
      className="fixed left-0 top-0 z-[999] flex h-[100dvh] w-screen bg-black"
    >
      <h1
        id="intro-logo"
        className="m-auto text-2xl font-medium text-white opacity-0 lg:text-6xl"
      >
        <span>Team</span>
        <span id="green-text">Green</span>
      </h1>
    </div>
  );
};

export default Intro;
