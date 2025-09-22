import { HiMenuAlt1 } from "react-icons/hi";
import HiremeButton from "./HiremeButton";
import LogoPath from "./LogoPath";
import HeaderItems from "./HeaderItems";

function Header() {
  return (
    <div className="flex md:block flex-row justify-between  items-center py-4 md:py-7">
      <HiMenuAlt1 className="text-4xl text-gray-100 md:hidden" />
      <div className="hidden md:flex md:flex-row md:items-center justify-between">
        <HiremeButton />
        <HeaderItems />
        <LogoPath />
      </div>{" "}
      <LogoPath className="md:hidden" />
    </div>
  );
}

export default Header;
