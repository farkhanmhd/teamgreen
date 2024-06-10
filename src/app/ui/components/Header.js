'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';
import Link from 'next/link';
import MenuButton from './MenuButton';

const Header = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  useGSAP(() => {
    gsap.from('#header', {
      yPercent: -100,
      ease: 'power2.inOut',
      duration: 1,
      delay: isFirstLoad && 3,
    });
  });
  return (
    <header
      id="header"
      className="fixed left-0 top-0 flex h-[110px] w-screen items-center justify-between bg-transparent px-[30px] mix-blend-difference lg:px-[50px] xl:px-[70px]"
    >
      <Link href="/" className="group text-sm font-medium text-white">
        TeamGreen
      </Link>
      <MenuButton />
    </header>
  );
};

export default Header;
