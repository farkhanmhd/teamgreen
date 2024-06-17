'use client';

import { useAtomValue } from 'jotai';
import { firstLoadAtom } from '@/app/states/state';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { isMobile } from '@/app/utils/utils';

const GalleryImage = ({ image, caption }) => {
  const isFirstLoad = useAtomValue(firstLoadAtom);
  useGSAP(() => {
    gsap.to('.gallery-image', {
      opacity: 1,
      stagger: 0.1,
      delay: isFirstLoad && 3.5,
    });
  });
  return (
    <li className="gallery-image group h-[20%] flex-[1] overflow-hidden opacity-0 duration-300 hover:flex-[3] xl:h-full xl:max-h-full">
      <figure className="relative h-full">
        <Image
          src={image}
          alt="gallery-image"
          width={1000}
          height={1000}
          className="absolute left-0 top-0 h-full w-full object-cover grayscale duration-300 group-hover:grayscale-0"
        />
        <figcaption className="absolute h-full w-full bg-black/50 opacity-0 duration-300 group-hover:opacity-100 group-hover:delay-300">
          <p className="flex h-full w-full items-center justify-center px-10 text-center font-medium text-white delay-300 duration-300 lg:text-sm">
            {caption}
          </p>
        </figcaption>
      </figure>
    </li>
  );
};

export default GalleryImage;
