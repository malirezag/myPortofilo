import Link from "next/link";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

function ContactButtons() {
  return (
    <div className="text-gray-200 text-3xl space-x-5 lg:space-x-10 my-5">
      <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
        <Link target="blank" href="#">
          <CiLinkedin />
        </Link>
      </button>
      <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
        <Link target="blank" href="#">
          <CiInstagram />
        </Link>
      </button>
      <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
        {" "}
        <Link target="blank" href="https://github.com/malirezag">
          <VscGithubAlt />
        </Link>
      </button>
      <button className="rounded-full p-1.5 border-gray-400 border bg-zinc-800">
        <Link target="blank" href="mailto:malirezag@gamil.com">
          <CiMail />
        </Link>
      </button>
    </div>
  );
}

export default ContactButtons;
