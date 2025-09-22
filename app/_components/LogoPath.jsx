import Image from "next/image";
import Link from "next/link";
import Logo from "../_assest/Logo.png";

function LogoPath({ className }) {
  return (
    <Link href="/">
      <Image
        src={Logo}
        height={50}
        width={50}
        alt="logo"
        className={className}
      />
    </Link>
  );
}

export default LogoPath;
