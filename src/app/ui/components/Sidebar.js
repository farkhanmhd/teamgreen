'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { sidebarAtom, darkModeAtom } from '@/app/states/state';
import { useGSAP } from '@gsap/react';
import SidebarLinkItem from './SidebarLinkItem';
import { openSidebar, closeSidebar } from '@/app/utils/sidebarAnimation';
import { isMobile } from '@/app/utils/utils';
import styles from './sidebarlink.module.css';

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
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.theme = !darkMode ? 'dark' : 'light';
    if (isMobile) {
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
      <aside
        className={`fixed top-0 z-[998] hidden h-screen w-screen items-center justify-center bg-black text-white lg:w-1/2 xl:w-1/4 ${darkMode && 'shadow-[0_0_20px_5px_rgba(255,255,255,0.3)]'}`}
      >
        <div className="flex h-full w-full items-center justify-center gap-y-20">
          <ul className="flex flex-col gap-y-5">
            {links.map((link, index) => (
              <SidebarLinkItem key={index} {...link} />
            ))}
            <li className="group relative max-w-max">
              <button
                className={`${styles.sidebarLink} cursor-none`}
                onClick={handleTheme}
              >{`Switch to ${darkMode ? 'Light' : 'Dark'} Mode`}</button>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
