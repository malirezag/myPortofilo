import { HiMenuAlt1 } from "react-icons/hi";
import Logo from "@/public/Logo.png";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-row justify-between items-center py-4">
      <HiMenuAlt1 className="text-4xl text-gray-100" />
      {/* <HiremeButton /> */}
      <Image src={Logo} height={50} width={50} alt="logo" />
    </div>
  );
}

export default Header;
