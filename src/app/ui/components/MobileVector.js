'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MobileVector = () => {
  const path = useRef(null);

  // useGSAP(() => {
  //   const timeline = gsap.timeline({
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '#mobile-vector',
  //       start: 'top center',
  //       end: '+=1000',
  //       scrub: 1,
  //       markers: true,
  //     },
  //   });

  //   const pathLength = path.current.getTotalLength();
  //   path.current.style.strokeDasharray = pathLength + ' ' + pathLength;
  //   path.current.style.strokeDashoffset = pathLength;

  //   timeline.fromTo(
  //     path.current,
  //     { strokeDashoffset: pathLength },
  //     { strokeDashoffset: 0 },
  //   );
  // });
  return (
    <>
      <svg
        height="4208"
        viewBox="0 0 393 4208"
        fill="none"
        preserveAspectRatio="xMidYMax"
        xmlns="http://www.w3.org/2000/svg"
        id="mobile-vector"
      >
        <path
          d="M393 1C380.87 2.95689 -55.7969 114.499 52.8847 301.708C161.566 488.917 467.719 629.813 319.252 932.478C170.785 1235.14 -54.826 1483.67 95.0964 1700.88C245.019 1918.1 423.567 2012.03 267.823 2331C112.078 2649.97 -34.9334 2905.67 116.445 3180.29C267.823 3454.9 458.015 3617.33 275.1 3871.72C92.1853 4126.12 48.5186 4163.95 0 4207"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          ref={path}
        />
      </svg>
    </>
  );
};

export default MobileVector;
