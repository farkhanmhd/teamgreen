'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import SplitWord from './SplitWord';

const Footer = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.25,
        ease: 'power2.inOut',
      },
      scrollTrigger: {
        trigger: 'footer',
        start: 'top center',
      },
    });

    timeline
      .from('.footer-title', {
        duration: 0.75,
        yPercent: -100,
        stagger: 0.1,
      })
      .to('.footer-button', {
        opacity: 1,
      })
      .from('#footer-copyright', {
        yPercent: 100,
      })
      .from('#footer-illustration', {
        yPercent: 100,
      });
  });

  return (
    <footer className="h-[100dvh] bg-white px-[30px] pt-[110px] font-medium lg:px-[50px] xl:px-[70px]">
      <div className="flex h-[calc(100%-110px)] flex-col items-center justify-center gap-y-[50px]">
        <h1 className="overflow-hidden text-center text-lg leading-tight md:text-xl lg:text-5xl">
          <SplitWord className="footer-title mr-3 lg:mr-6">
            Join the Digital Revolution for a Greener Tomorrow
          </SplitWord>
        </h1>
        <Link
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className="footer-button z-[999] block cursor-none rounded-[18px] border-2 border-white bg-black px-8 py-2 text-xs text-white opacity-0 mix-blend-difference duration-200 hover:bg-white hover:text-black"
          target="_blank"
        >
          Join now
        </Link>
      </div>
      <div className="flex flex-col justify-between gap-y-3 lg:mt-[50px] lg:flex-row">
        <div className="overflow-hidden">
          <p id="footer-copyright">
            &copy; TeamGreen 2024 - All rights reserved
          </p>
        </div>
        <div className="overflow-hidden">
          <p id="footer-illustration">
            Illustration by{' '}
            <Link
              href="https://icons8.com/license"
              target="_blank"
              className="cursor-none"
            >
              Icons8
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
