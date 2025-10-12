import HiremeButton from "./HiremeButton";
import Image from "next/image";
import photo from "../_assest/photo.svg";
import ContactButtons from "./ContactButtons";
import Link from "next/link";

function Homebanner() {
  return (
    <div className=" my-5 md:flex md:flex-row lg:gap-30 md:items-center min-h-[calc(100vh-9rem)] max-w-280 mx-auto">
      <div className="text-center xl:text-start flex flex-col gap-5 lg:w-[55%]">
        <p className="text-gray-400 flex flex-col xl:text-xl">
          سلام من
          <span className="text-gray-100"> علیرضافلاح حسینی هستم</span>
        </p>

        <h1 className="text-5xl xl:text-7xl bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent font-bold">
          Front-end Dev
        </h1>

        <ContactButtons />

        <div className="space-x-5">
          <button>
            <HiremeButton />
          </button>
          <button>
            <Link
              href="/projects"
              className="border border-gray-400 text-gray-400 rounded py-2 px-3"
            >
              مشاهده نمونه کار ها
            </Link>
          </button>
        </div>

        <div className="text-end flex flex-row divide-x-1 divide-zinc-500 bg-zinc-900 p-4 rounded-xl mt-10 lg:max-w-150">
          <p
            className="text-orange-500 flex flex-col text-2xl font-bold p-2 
          w-[50%]"
          >
            +2 <span className="text-gray-100 text-xl">سال تجربه</span>
          </p>
          <p
            className="text-orange-500 flex flex-col text-2xl font-bold p-2 
          w-[50%]"
          >
            +5 <span className="text-gray-100 text-xl "> پروژه موفق</span>
          </p>
          {/* <p className="text-orange-500 flex flex-col text-xl font-bold">
            +2 <span className="text-gray-100 ">تجربه</span>
          </p> */}
        </div>
      </div>

      <div className="relative mx-auto sm:h-[75vh] h-[48vh] sm:max-w-100 max-w-70 md:flex-1 ">
        <Image src={photo} alt="my image" fill className=" rounded-xl" />
      </div>
    </div>
  );
}

export default Homebanner;
