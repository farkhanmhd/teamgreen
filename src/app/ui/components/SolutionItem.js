'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useAtomValue } from 'jotai';
import { darkModeAtom } from '@/app/states/state';
import Image from 'next/image';
import { isDesktop } from '@/app/utils/utils';

const SolutionItem = ({
  src,
  width,
  height,
  title,
  subtitle,
  imageFirst,
  id,
}) => {
  const darkMode = useAtomValue(darkModeAtom);
  useGSAP(() => {
    if (!isDesktop) {
      const timeline = gsap.timeline({
        stagger: 0.1,
        scrollTrigger: {
          trigger: `#${id}`,
          start: isDesktop ? 'top center' : 'top 60%',
        },
      });
      if (id === `solution-1`) {
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
      } else {
        timeline
          .from(`#${id} img`, {
            opacity: 0,
          })
          .from(`#${id} h3`, {
            yPercent: -100,
          })
          .from(`#${id} p`, {
            yPercent: -100,
          });
      }
    } else {
      if (id === 'solution-1') {
        const timeline = gsap.timeline({
          stagger: 0.1,
          scrollTrigger: {
            trigger: `#solution-1`,
            start: 'top center',
          },
        });
        timeline
          .from(`#solution-1 h3`, {
            yPercent: -100,
          })
          .from(`#solution-1 p`, {
            yPercent: -100,
          })
          .from(`#solution-1 img`, {
            opacity: 0,
          });
      }
    }
  });

  return (
    <li className="w-full" id={id}>
      <figure className="flex w-full flex-col gap-y-[23px] xl:flex-row xl:justify-between xl:gap-x-[200px]">
        <div
          className={`${imageFirst ? 'order-1 max-w-[456px] xl:ml-[140px]' : 'order-2 max-w-[600px] xl:mr-[140px]'} max-h-[456px] w-full lg:self-center xl:w-1/2`}
        >
          <Image
            src={src}
            alt="solution image"
            width={width}
            height={height}
            className={`${darkMode ? 'invert' : ''} anim-image w-full object-cover xl:m-auto`}
          />
        </div>
        <figcaption
          className={`${imageFirst ? 'order-2' : 'order-1'} xl:flex xl:w-1/2 xl:flex-col xl:justify-between`}
        >
          <div className="mb-[23px] overflow-hidden">
            <h3 className="anim-title text-light-green text-xl leading-tight lg:text-4xl">
              {title}
            </h3>
          </div>
          <div className="overflow-hidden">
            <p className="anim-description text-xxs font-normal lg:text-md">
              {subtitle}
            </p>
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

export default SolutionItem;
