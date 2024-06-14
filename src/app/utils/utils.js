export const isMobile =
  typeof window !== 'undefined' && window.innerWidth < 1024;

export const isDesktop =
  typeof window !== 'undefined' && window.innerWidth >= 1280;

export const isPageScrolling = () => {
  return window.scrollY > 0;
};

export const isPageStopScrolling = () => {
  return window.scrollY === 0;
};
