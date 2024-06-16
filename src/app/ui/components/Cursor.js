'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Cursor = () => {
  useGSAP(() => {
    document.addEventListener('mousemove', (e) => {
      gsap.to('#cursor', {
        x: e.clientX - 12,
        y: e.clientY - 12,
      });
    });
  });

  return (
    <div
      id="cursor"
      className="pointer-events-none fixed z-[1000] h-6 w-6 rounded-full bg-white mix-blend-difference lg:block"
    />
  );
};

export default Cursor;
