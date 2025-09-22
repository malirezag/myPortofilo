import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";

function ContactButtons() {
  return (
    <div className="text-gray-200 text-3xl space-x-5 lg:space-x-10 my-5">
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
  );
}

export default ContactButtons;
