'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SolutionItem from './SolutionItem';
import { solutions } from '@/app/utils/data';
import { isDesktop } from '@/app/utils/utils';

const SolutionItemsContainer = () => {
  const listRef = useRef(null);
  useGSAP(() => {
    const listItem = gsap.utils.toArray('#solution-list li');

    if (isDesktop()) {
      const translateValue =
        listRef.current.clientWidth / 6 - listRef.current.clientWidth - 140;

      let scrollTween = gsap.to('#solution-list', {
        x: `${translateValue}px`,
        ease: 'none',
        stagger: 0.5,
        scrollTrigger: {
          trigger: '#solution-list',
          start: 'top top',
          end: '+=6000',
          pin: true,
          scrub: 1,
        },
      });

      listItem.forEach((list, index) => {
        if (index >= 1) {
          let image = list.querySelectorAll('.anim-image');
          let title = list.querySelectorAll('.anim-title');
          let description = list.querySelectorAll('.anim-description');

          gsap.from(image, {
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
              trigger: image,
              containerAnimation: scrollTween,
              start: 'left center',
            },
          });
          gsap.from(title, {
            yPercent: -100,
            delay: 0.5,
            stagger: 0.5,
            scrollTrigger: {
              trigger: image,
              containerAnimation: scrollTween,
              start: 'left center',
            },
          });
          gsap.from(description, {
            yPercent: -100,
            delay: 1,
            stagger: 0.5,
            scrollTrigger: {
              trigger: image,
              containerAnimation: scrollTween,
              start: 'left center',
            },
          });
        }
      });
    }
  });
  return (
    <ul
      className="] flex w-full flex-col gap-y-[200px] xl:h-[100dvh] xl:w-[600vw] xl:flex-row xl:items-center xl:gap-x-[140px] xl:gap-y-0"
      id="solution-list"
      ref={listRef}
    >
      {solutions.map((solution, index) => (
        <SolutionItem key={index} {...solution} />
      ))}
    </ul>
  );
};

export default SolutionItemsContainer;
