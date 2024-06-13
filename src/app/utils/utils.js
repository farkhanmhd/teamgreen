export const isMobile =
  typeof window !== 'undefined' && window.innerWidth < 1024;

export const isDesktop =
  typeof window !== 'undefined' && window.innerWidth >= 1280;
