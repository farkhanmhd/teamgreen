'use client';

import Header from './ui/components/Header';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from './states/state';
import Intro from './ui/components/Intro';

export default function Template({ children }) {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  return (
    <>
      {isFirstLoad && <Intro />}
      <Header />
      {children}
    </>
  );
}
