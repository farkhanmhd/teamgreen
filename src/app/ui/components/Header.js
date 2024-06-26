'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { firstLoadAtom, sidebarAtom } from '@/app/states/state';
import Link from 'next/link';
import MenuButton from './MenuButton';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Header = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  const sidebarOpen = useAtomValue(sidebarAtom);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animateHeader = gsap.from('#header', {
      yPercent: -100,
      ease: 'power2.inOut',
    });

    if (isFirstLoad) animateHeader.play().delay(3);

    if (sidebarOpen) animateHeader.play();

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
      className="fixed left-0 top-0 z-[999] flex h-[60px] w-screen items-center justify-between px-[30px] mix-blend-difference invert lg:px-[50px] xl:px-[70px] dark:invert-0"
    >
      <Link
        href="/"
        className="group cursor-none text-sm font-medium text-white"
      >
        <span
          className={`${sidebarOpen ? 'text-white invert dark:invert-0' : 'text-black'} duration-200 dark:text-white`}
        >
          Team
        </span>
        <span
          className={`text-light-green duration-200 ${sidebarOpen && 'dark:invert-0'}`}
        >
          Green
        </span>
      </Link>
      <MenuButton />
    </header>
  );
};

export default Header;
