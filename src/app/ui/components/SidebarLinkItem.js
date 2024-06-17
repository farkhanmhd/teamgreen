'use client';

import { useAtom } from 'jotai';
import { sidebarAtom } from '@/app/states/state';
import Link from 'next/link';
import styles from './sidebarlink.module.css';

const SidebarLinkItem = ({ text, href }) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  return (
    <li
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className="group relative max-w-max"
    >
      <Link href={href} className={`${styles.sidebarLink} cursor-none text-xl`}>
        {text}
      </Link>
      <div
        className={`absolute bottom-0 left-0 h-[2px] w-0 origin-left bg-white duration-300`}
      />
    </li>
  );
};

export default SidebarLinkItem;
