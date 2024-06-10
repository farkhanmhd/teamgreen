export const isMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth < 1024;
};

export const isTablet = () => {
  return (
    typeof window !== 'undefined' &&
    window.innerWidth < 1280 &&
    window.innerWidth >= 1024
  );
};

export const isDesktop = () => {
  return typeof window !== 'undefined' && window.innerWidth >= 1280;
};
