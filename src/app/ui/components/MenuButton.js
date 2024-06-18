import { useAtom } from 'jotai';
import { sidebarAtom } from '@/app/states/state';

const MenuButton = () => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom);
  return (
    <button
      className="flex h-[12px] cursor-none flex-col justify-between mix-blend-difference"
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <div
        className={`h-0.5 w-[30px] origin-left duration-200 ${sidebarOpen ? '-translate-y-[9px] rotate-45 bg-white invert' : 'bg-black dark:bg-white'}`}
      ></div>
      <div
        className={`h-0.5 w-[30px] origin-left duration-200 ${sidebarOpen ? 'translate-y-[2px] -rotate-45 bg-white invert' : 'bg-black dark:bg-white'}`}
      ></div>
    </button>
  );
};

export default MenuButton;
