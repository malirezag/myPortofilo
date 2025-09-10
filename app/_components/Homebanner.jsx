import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import HiremeButton from "./HiremeButton";

function Homebanner() {
  return (
    <div className=" my-5">
      <div className="text-center flex flex-col gap-5">
        <p className="text-gray-400 flex flex-col">
          سلام من
          <span className="text-gray-100"> علیرضافلاح حسینی هستم</span>
        </p>

        <h1 className="text-5xl bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent font-bold">
          Front-end Dev
        </h1>

        <div className="text-gray-200 text-3xl space-x-5 my-5">
          <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
            <CiLinkedin />
          </button>
          <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
            <CiInstagram />
          </button>
          <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
            <VscGithubAlt />
          </button>
          <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
            <CiMail />
          </button>
        </div>

        <div className="space-x-5">
          <HiremeButton />
          <button className="border border-gray-400 text-gray-400 rounded py-2 px-3">
            Download cv
          </button>
        </div>

        <div className="text-end flex flex-row divide-x-1 divide-zinc-500 bg-zinc-800 p-4 rounded-xl my-10">
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

      <div></div>
    </div>
  );
}

export default Homebanner;
