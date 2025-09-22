import Link from "next/link";

function HiremeButton() {
  return (
    <Link
      href="/contact"
      className="bg-gradient-to-r from-orange-400 to-red-600 py-2 px-3 rounded text-orange-50 font-semibold w-fit "
    >
      استخدام من
    </Link>
  );
}

export default HiremeButton;
