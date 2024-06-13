import { isMobile } from './utils';

export const solutions = [
  {
    src: '/images/solution1.png',
    width: isMobile ? 333 : 600,
    height: isMobile ? 230 : 413,
    title: 'The Solutions',
    subtitle:
      'Discover these five strategies to promote a zero-waste lifestyle and reduce environmental pollution through digital engagement',
    imageFirst: false,
    id: 'solution-1',
  },
  {
    src: '/images/solution2.png',
    width: isMobile ? 333 : 456,
    height: isMobile ? 333 : 456,
    title: 'Eco-Challenge App',
    subtitle:
      'A mobile application that gamifies waste reduction. Users can participate in daily, weekly, and monthly challenges to minimize their waste output, track their progress, and earn rewards for sustainable practices.',
    imageFirst: true,
    id: 'solution-2',
  },
  {
    src: '/images/solution3.png',
    width: isMobile ? 333 : 456,
    height: isMobile ? 333 : 456,
    title: 'Virtual Recycling Assistant',
    subtitle:
      'An AI-powered chatbot that educates users on how to recycle various materials properly. It provides local recycling information and can answer questions about what can and cannot be recycled.',
    imageFirst: true,
    id: 'solution-3',
  },
  {
    src: '/images/solution4.png',
    width: isMobile ? 333 : 456,
    height: isMobile ? 333 : 456,
    title: 'Zero-Waste Online Marketplace',
    subtitle:
      'A platform that connects consumers with eco-friendly products. It emphasizes goods made from recycled materials, items with minimal packaging, and products designed for longevity and reusability.',
    imageFirst: true,
    id: 'solution-4',
  },
  {
    src: '/images/solution5.png',
    width: isMobile ? 333 : 456,
    height: isMobile ? 333 : 456,
    title: 'Digital Waste Tracking System',
    subtitle:
      'A tool for individuals and businesses to track their waste generation. It offers insights into waste patterns and suggests actionable steps to reduce the environmental footprint.',
    imageFirst: true,
    id: 'solution-5',
  },
  {
    src: '/images/solution6.png',
    width: isMobile ? 333 : 456,
    height: isMobile ? 333 : 456,
    title: 'Clean-Up Community Network',
    subtitle:
      'A social network that organizes and promotes local clean-up events. It encourages community participation and provides resources for organizing and executing successful waste reduction initiatives.',
    imageFirst: true,
    id: 'solution-6',
  },
];

export const benefits = [
  {
    id: 'benefit-1',
    title: 'Streamlined Waste Management',
    subtitle:
      'Digital tools simplify sorting and disposal, leading to more efficient recycling and waste reduction efforts.',
    image: '/images/benefit1.png',
  },
  {
    id: 'benefit-2',
    title: 'Boosted Eco-Innovation',
    subtitle:
      'The adoption of digital solutions spurs creativity, leading to innovative products and services that prioritize the environment.',
    image: '/images/benefit2.png',
  },
  {
    id: 'benefit-3',
    title: 'Global Connectivity',
    subtitle:
      'Online platforms unite people worldwide, sharing best practices and collaborating on international sustainability projects.',
    image: '/images/benefit3.png',
  },
];
