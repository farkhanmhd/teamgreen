'use client';

import { useAtomValue } from 'jotai';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { darkModeAtom } from '@/app/states/state';
import Image from 'next/image';

const BenefitItem = ({ id, title, subtitle, image }) => {
  const darkMode = useAtomValue(darkModeAtom);
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 60%',
      },
    });
    timeline
      .from(`#${id} h3`, {
        yPercent: -100,
      })
      .from(`#${id} p`, {
        yPercent: -100,
      })
      .from(`#${id} img`, {
        opacity: 0,
      });
  });

  return (
    <li
      id={id}
      className="flex flex-col gap-y-[40px] lg:flex-row lg:justify-between"
    >
      <div
        className={`flex flex-col lg:w-[59%] lg:justify-evenly lg:py-[40px] ${id === 'benefit-2' && 'lg:order-2'}`}
      >
        <div className="mb-5 overflow-hidden">
          <h3
            className={`text-xl font-medium leading-tight lg:text-2xl xl:text-4xl ${id === 'benefit-2' && 'xl:text-right'}`}
          >
            {title}
          </h3>
        </div>
        <div className="overflow-hidden">
          <p className={`lg:text-md ${id === 'benefit-2' && 'lg:text-right'}`}>
            {subtitle}
          </p>
        </div>
      </div>
      <figure
        className={`h-full w-full max-w-[456px] pr-[30px] lg:w-[41%] lg:self-center ${id === 'benefit-2' && 'lg:order-1'}`}
      >
        <Image
          src={image}
          alt="benefit"
          width={456}
          height={456}
          className={`w-full object-contain ${darkMode && 'invert'}`}
        />
      </figure>
    </li>
  );
};

export default BenefitItem;
