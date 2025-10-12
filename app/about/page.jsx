import Image from "next/image";
import photo from "../_assest/about.svg";
import { FaJsSquare, FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { RiCss3Line, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import CircleProgress from "../_components/PercentCircle";

export const metadata = {
  title: "about",
};

const skills = [
  { skill: "Javascript", percent: 75, icon: FaJsSquare },
  { skill: "Css", percent: 96, icon: RiCss3Line },
  { skill: "Html", percent: 97, icon: ImHtmlFive2 },
  { skill: "TailwindCss", percent: 80, icon: RiTailwindCssFill },
  { skill: "ReactJs", percent: 70, icon: FaReact },
  { skill: "NextJs", percent: 65, icon: SiNextdotjs },
];

function page() {
  return (
    <div>
      <div className="text-gray-400 text-center text-3xl">
        <h1 className="py-2 text-gray-200">درباره من </h1>
        <h2 className="text-lg">
          {" "}
          برنامه نویس و توسعه دهنده فرانت اند حوزه وب{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 my-15 sm:my-25  ">
          <Image
            alt="my photo"
            src={photo}
            className="col-span-2 max-w-85 sm:max-w-90 mx-auto my-auto"
          />
          <p className="text-sm/8 text-end my-10 md:col-span-3 md:my-auto lg:mx-10 md:ml-19 lg:text-base ">
            سلام، من علیرضا فلاح حسینی هستم، فرانت‌اند دولوپر با تمرکز بر توسعه
            وب مدرن و پیاده‌سازی رابط‌های کاربری پیچیده و واکنش‌گرا. تجربه‌ی کار
            با React و Next.js و مدیریت state، بهینه‌سازی عملکرد صفحات، و طراحی
            ساختار کامپوننت‌های مقیاس‌پذیر را دارم. در پروژه‌هایم، علاوه بر
            طراحی بصری دقیق، به هماهنگی با بک‌اند و APIها و اطمینان از عملکرد
            بی‌نقص و بهینه صفحات اهمیت می‌دهم. توانایی من در ایجاد تجربه کاربری
            یکپارچه و تعامل پویا با کاربر باعث می‌شود محصولات نه تنها از نظر
            ظاهری جذاب باشند، بلکه از نظر عملکرد و پاسخگویی هم حرفه‌ای عمل کنند.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 space-y-5 my-3 md:my-15 ">
        {skills.map((skill) => (
          <li key={skill.skill}>
            <CircleProgress
              icon={skill.icon}
              skill={skill.skill}
              percent={skill.percent}
            />
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}

export default page;
