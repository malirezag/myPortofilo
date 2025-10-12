import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import LogoPath from "./LogoPath";
import HeaderItems from "./HeaderItems";
import { useEffect, useRef } from "react";

function MobileMenu({ setIsOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return createPortal(
    <div
      className="min-h-screen absolute top-0 bg-zinc-800 w-[80%] sm:max-w-110 p-5 "
      ref={menuRef}
    >
      <div className="flex flex-row items-center justify-between ">
        <LogoPath />
        <button onClick={() => setIsOpen(false)}>
          <RiCloseFill className="text-gray-300 text-3xl" />
        </button>
      </div>
      <HeaderItems />
    </div>,
    document.body
  );
}

export default MobileMenu;
