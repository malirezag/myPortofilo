import Link from "next/link";
import LogoPath from "./LogoPath";
import ContactButtons from "./ContactButtons";
import { CiMail, CiPhone } from "react-icons/ci";

const Items = [
  {
    name: "خانه",
    href: "/",
  },
  {
    name: "درباره من",
    href: "/about",
  },
  {
    name: "ارتباط",
    href: "/contact",
  },
  {
    name: "نمونه کار",
    href: "/projects",
  },
];

function Footer() {
  return (
    <div className="bg-zinc-900 flex flex-col justify-center items-center py-2 mt-2 ">
      <LogoPath className="py-4" />
      <ul className="flex flex-row md:text-xl gap-8 md:gap-13 justify-center ">
        {Items.map((item) => (
          <li className={`text-gray-300 text-nowrap `} key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ContactButtons />

      <Link
        href="mailto:malirezag@gmail.com"
        className="flex flex-row text-gray-400 items-center text-xl gap-2"
      >
        <span className="text-2xl">
          <CiMail />
        </span>
        malirezag@gmail.com
      </Link>
      <Link
        href="tel:09120358337"
        className="flex flex-row text-gray-400 items-center text-xl gap-2"
      >
        <span className="text-2xl">
          <CiPhone />
        </span>
        0912-035-8337
      </Link>

      <p className="text-gray-400 py-4 mt-5 px-10 border-t border-gray-400 text-center mx-2">
        Developed by{" "}
        <Link href="mailto:malirezag@gmail.com" className="text-red-500">
          📧 Aireza.F
        </Link>{" "}
        Web Developer
      </p>
    </div>
  );
}

export default Footer;
