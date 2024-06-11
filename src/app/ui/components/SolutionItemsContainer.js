'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SolutionItem from './SolutionItem';
import { solutions } from '@/app/utils/data';
import { isMobile, isTablet, isDesktop } from '@/app/utils/utils';

const SolutionItemsContainer = () => {
  useGSAP(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: 'power2.inOut',
        delay: isDesktop ? 0 : 0.2,
      },
    });

    if (isDesktop) {
      gsap.to('#solution-list', {
        xPercent: -85,
        scrollTrigger: {
          trigger: '#solution',
          start: 'top top',
          end: '+=5000',
          pin: true,
          scrub: 1,
        },
      });
    }

    for (let i = 1; i <= 6; i++) {
      if (isMobile() || isTablet()) {
        gsap.from(`#solution`, {
          scrollTrigger: {
            trigger: `#solution-${i}`,
            onEnter: () => {
              i === 1
                ? timeline
                    .from(`#solution-${i} h3`, { yPercent: -100 })
                    .from(`#solution-${i} p`, { yPercent: -100 })
                    .from(`#solution-${i} img`, { opacity: 0 })
                : timeline
                    .from(`#solution-${i} img`, { opacity: 0 })
                    .from(`#solution-${i} h3`, { yPercent: -100 })
                    .from(`#solution-${i} p`, { yPercent: -100 });
            },
            scrub: 1,
          },
        });
      } else {
        gsap.from(`#solution`, {
          scrollTrigger: {
            trigger: `#solution`,
            onEnter: () => {
              i === 1
                ? timeline
                    .from(`#solution-${i} h3`, { yPercent: -100, delay: 0.5 })
                    .from(`#solution-${i} p`, { yPercent: -100 })
                    .from(`#solution-${i} img`, { opacity: 0 })
                : timeline
                    .from(`#solution-${i} img`, { opacity: 0, delay: 0.5 })
                    .from(`#solution-${i} h3`, { yPercent: -100 })
                    .from(`#solution-${i} p`, { yPercent: -100 });
            },
            scrub: 1,
          },
        });
      }
    }
  });
  return (
    <ul
      className="flex w-full flex-col gap-y-[200px] mix-blend-difference xl:h-[100dvh] xl:w-[600vw] xl:flex-row xl:items-center xl:gap-x-[140px] xl:gap-y-0"
      id="solution-list"
    >
      {solutions.map((solution, index) => (
        <SolutionItem key={index} {...solution} />
      ))}
    </ul>
  );
};

export default SolutionItemsContainer;
