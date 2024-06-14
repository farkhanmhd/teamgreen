'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';
import Link from 'next/link';
import MenuButton from './MenuButton';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { isDesktop } from '@/app/utils/utils';

const Header = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animateHeader = gsap.from('#header', {
      yPercent: -100,
      ease: 'power2.inOut',
    });

    if (isFirstLoad) animateHeader.play().delay(3);

    gsap.to('header', {
      scrollTrigger: {
        trigger: 'html',
        start: 'top top',
        end: '+=100000',
        onUpdate: (self) => {
          if (self.direction === -1) {
            animateHeader.play();
          } else {
            animateHeader.reverse();
          }
        },
      },
    });
  });
  return (
    <header
      id="header"
      className="fixed left-0 top-0 z-[999] flex h-[60px] w-screen items-center justify-between bg-white/50 px-[30px] backdrop-blur-md lg:px-[50px] xl:px-[70px]"
    >
      <Link
        href="/"
        className="group cursor-none text-sm font-medium text-black"
      >
        TeamGreen
      </Link>
      <MenuButton />
    </header>
  );
};

export default Header;
