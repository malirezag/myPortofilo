"use client";

function page() {
  return (
    <div className="mb-15">
      <h1 className="flex flex-col text-center text-2xl/10 md:text-3xl/10  text-gray-200 justify-center items-center mb-15 mt-3 gap-2">
        ارتباط با من
        <span className="text-base text-gray-400">
          جهت ارتباط با من از طریق فرم یا راه های ارتباطی انتهای صفحه اقدام کنید{" "}
        </span>
      </h1>

      <div className="relative">
        <form
          action=""
          className="grid grid-cols-1 gap-3 max-w-100 mx-auto"
          dir="rtl"
        >
          <div className="relative">
            <input
              id="name"
              name="name"
              type="text"
              placeholder=" "
              className=" peer w-full bg-zinc-900 focus:bg-black text-zinc-200 p-2 rounded 
                       focus:border-orange-500 focus:ring-1 
                       focus:ring-orange-500 focus:outline-none placeholder-transparent"
            />
            <label
              htmlFor="name"
              className="absolute right-4 transition-all duration-200
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500
                       peer-focus:-top-2 peer-focus:text-sm peer-focus:text-orange-500 bg-zinc-900 peer-focus:bg-black  px-2  peer-not-placeholder-shown:hidden"
            >
              نام و نام خانوادگی
            </label>
          </div>

          <div className="relative">
            <input
              id="email"
              name="email"
              placeholder=" "
              type="text"
              className=" peer w-full bg-zinc-900 focus:bg-black text-zinc-200  p-2 rounded 
                       focus:border-orange-500 focus:ring-1 
                       focus:ring-orange-500 focus:outline-none placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="absolute right-4 transition-all duration-200
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500
                       peer-focus:-top-2 peer-focus:text-sm peer-focus:text-orange-500 bg-zinc-900 peer-focus:bg-black  px-2  peer-not-placeholder-shown:hidden"
            >
              ایمیل
            </label>
          </div>

          <div className="relative">
            <textarea
              id="exp"
              name="exp"
              placeholder=" "
              type="text"
              className="peer w-full bg-zinc-900 focus:bg-black text-zinc-200  p-2 rounded focus:border-orange-500 focus:ring-1 
                       focus:ring-orange-500 focus:outline-none  placeholder-transparent h-32"
            />
            <label
              htmlFor="exp"
              className="absolute right-4 transition-all duration-200
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500
                       peer-focus:-top-2 peer-focus:text-sm peer-focus:text-orange-500 bg-zinc-900 peer-focus:bg-black  px-2  peer-not-placeholder-shown:hidden"
            >
              توضیحات
            </label>
          </div>

          <button className="text-zinc-300 border-2 border-zinc-300 py-2 px-5 w-fit rounded mx-auto my-5">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
