import Link from "next/link";
import MenuButton from "./MenuButton";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 flex h-[110px] w-screen items-center justify-between bg-transparent px-[30px] mix-blend-difference lg:px-[50px] xl:px-[70px]">
      <Link href="/" className="group text-sm text-white">
        TeamGreen
      </Link>
      <MenuButton />
    </header>
  );
};

export default Header;
