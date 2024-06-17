'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import Image from 'next/image';
import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';

const AboutPage = () => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  const [data, setData] = useState(1);

  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.75,
        ease: 'power2.inOut',
      },
    });

    timeline
      .from('#about-img', {
        opacity: 0,
        delay: isFirstLoad && 3.5,
      })
      .from('#about-quote', {
        yPercent: -100,
      })
      .from('#about-name', {
        yPercent: -100,
        duration: 0.4,
      })
      .from('#about-role', {
        yPercent: -100,
        duration: 0.4,
      })
      .from('#about-button', {
        opacity: 0,
      });
  });

  return (
    <main className="h-[100dvh] bg-white px-[30px] pb-[50px] pt-[110px] lg:px-[50px] xl:px-[70px] dark:bg-black dark:text-white">
      <div className="mx-auto flex h-full w-full flex-col gap-[50px] lg:w-11/12 xl:flex-row">
        <div
          className="h-1/2 w-full overflow-hidden rounded-lg lg:h-full xl:w-1/2"
          id="about-img"
        >
          <Image
            src={`/images/about-img-${data}.jpg`}
            alt="about-img-1"
            width={500}
            height={500}
            className={`h-full w-full object-cover ${data === 2 && 'grayscale'}`}
          />
        </div>
        <div className="flex h-1/2 w-full flex-col justify-between lg:h-full xl:w-1/2">
          <div className="overflow-hidden">
            <p className="overflow-hidden lg:text-lg" id="about-quote">
              {data === 1
                ? `“The key to a cleaner environment lies in what we consume. By making
            mindful choices, opting for reusable over disposable, supporting
            eco-friendly products, and reducing waste, we unlock a greener
            future”`
                : `“Together, we hold the key to a cleaner planet. When communities, businesses, and policymakers collaborate, we create a symphony of positive change, a harmonious melody that resonates across generations”`}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="overflow-hidden">
                <p className="text-xs font-medium lg:text-2xl" id="about-name">
                  {data === 1 ? 'Farkhan Muhammad' : 'Farid Ashyqi'}
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="font-medium lg:text-md" id="about-role">
                  {data === 1 ? 'Frontend Developer' : 'Designer, Photographer'}
                </p>
              </div>
            </div>
            <div className="flex gap-x-5" id="about-button">
              <button
                className="group flex h-[60px] w-[60px] cursor-none items-center justify-center rounded-full border-2 border-black duration-200 hover:bg-black dark:border-white dark:hover:bg-white"
                id="prev"
                onClick={() => setData(data === 1 ? 2 : 1)}
              >
                <Image
                  src="/images/left.png"
                  alt="left"
                  width={20}
                  height={20}
                  className="duration-200 group-hover:invert dark:bg-white dark:invert dark:group-hover:invert-0"
                />
              </button>
              <button
                className="group flex h-[60px] w-[60px] cursor-none items-center justify-center rounded-full border-2 border-black duration-200 hover:bg-black dark:border-white dark:bg-black dark:hover:bg-white"
                id="next"
                onClick={() => setData(data === 1 ? 2 : 1)}
              >
                <Image
                  src="/images/right.png"
                  alt="left"
                  width={20}
                  height={20}
                  className="duration-200 group-hover:invert dark:bg-white dark:invert dark:group-hover:invert-0"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
