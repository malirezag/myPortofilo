import { createPortal } from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import LogoPath from "./LogoPath";
import HeaderItems from "./HeaderItems";

function MobileMenu({ setIsOpen }) {
  return createPortal(
    <div className="min-h-screen absolute top-0 bg-zinc-800 w-[80%] sm:max-w-110 p-5 ">
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
