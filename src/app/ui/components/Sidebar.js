'use client';

import { useAtom } from 'jotai';
import { sidebarAtom } from '@/app/states/state';
import { useGSAP } from '@gsap/react';
import SidebarLinkItem from './SidebarLinkItem';
import { openSidebar, closeSidebar } from '@/app/utils/sidebarAnimation';

const links = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Gallery',
    href: '/gallery',
  },
  {
    text: 'About',
    href: '/about',
  },
];

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  useGSAP(() => {
    if (sidebarOpen) openSidebar();
    else closeSidebar();
  }, [sidebarOpen]);

  const handleOverlayClick = () => {
    if (sidebarOpen) {
      closeSidebar();
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed left-0 top-0 z-[997] h-screen w-screen bg-black mix-blend-difference duration-1000"
          onClick={handleOverlayClick}
        />
      )}
      <aside className="fixed top-0 z-[998] hidden h-screen w-screen items-center justify-center bg-black text-white lg:w-1/2 xl:w-1/4">
        <div className="flex h-full w-full items-center justify-center gap-y-20">
          <ul className="flex flex-col gap-y-5">
            {links.map((link, index) => (
              <SidebarLinkItem key={index} {...link} />
            ))}
            <li className="group relative max-w-max">
              <button className="cursor-none">Dark Mode</button>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300 group-hover:w-full" />
            </li>
            <li className="group relative max-w-max">
              <button className="cursor-none">Switch to Indonesian</button>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300 group-hover:w-full" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
