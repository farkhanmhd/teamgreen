import gsap from 'gsap';

const openSidebar = () => {
  gsap.to('aside', {
    right: 0,
    ease: 'power2.inOut',
    display: 'block',
  });
};

const closeSidebar = () => {
  gsap.to('aside', {
    right: '-100%',
    ease: 'power2.inOut',
    display: 'none',
  });
};

export { openSidebar, closeSidebar };
