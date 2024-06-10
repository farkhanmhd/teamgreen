'use client';

import Intro from './ui/components/Intro';
import Header from './ui/components/Header';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from './states/state';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

export default function Template({ children }) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  const isFirstLoad = useAtomValue(firstLoadAtom);
  return (
    <>
      {isFirstLoad && <Intro />}
      <Header />
      {children}
    </>
  );
}
