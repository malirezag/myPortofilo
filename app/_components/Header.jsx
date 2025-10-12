"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import HiremeButton from "./HiremeButton";
import LogoPath from "./LogoPath";
import MobileMenu from "./MobileMenu";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="flex md:block flex-row justify-between  items-center py-4 md:py-7">
      {isOpen ? (
        <MobileMenu setIsOpen={setIsOpen} />
      ) : (
        <HiMenuAlt1
          className="text-4xl text-gray-100 md:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
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
