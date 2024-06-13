'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import BenefitItemsContainer from '../components/BenefitItemsContainer';

const BenefitsSection = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      yPercent: -100,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    });
    gsap.from(descriptionRef.current, {
      yPercent: -100,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: 'top 80%',
      },
    });
  });

  return (
    <section className="px-[30px] py-[110px] font-medium lg:px-[50px] xl:px-[70px]">
      <div className="mb-[80px]">
        <div className="overflow-hidden">
          <h1
            className="mb-7 text-2xl leading-tight lg:text-4xl xl:text-5xl"
            ref={titleRef}
          >
            The Impactful Benefits
          </h1>
        </div>
        <div className="overflow-hidden">
          <p className="lg:text-md" ref={descriptionRef}>
            Using digital tools effectively can lead to outstanding
            environmental achievements
          </p>
        </div>
      </div>
      <BenefitItemsContainer />
    </section>
  );
};

export default BenefitsSection;
