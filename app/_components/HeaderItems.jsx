"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

function HeaderItems() {
  const pathname = usePathname();
  return (
    <ul className="flex md:flex-row flex-col md:gap-20 gap-10 py-10 items-center md:items-start md:py-0">
      {Items.map((item) => (
        <li
          className={`text-gray-300 text-xl text-nowrap  ${
            pathname === item.href
              ? "bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent font-bold"
              : ""
          }`}
          key={item.href}
        >
          <Link href={item.href}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default HeaderItems;
