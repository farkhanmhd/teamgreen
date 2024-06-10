import Link from "next/link";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 flex h-[110px] w-screen items-center justify-between px-[30px] lg:px-[50px] xl:px-[70px]">
      <Link href="/" className="group text-sm font-medium">
        <span>Team</span>
        <span className="group-hover:text-green duration-200">Green</span>
      </Link>
      <MenuButton />
    </header>
  );
};

export default Header;
