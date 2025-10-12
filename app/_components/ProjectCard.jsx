import { Rocket } from "../../public/svg/Rocket";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({ name, href, image, category, isDeveloping }) {
  return (
    <Link
      href={href}
      className="size-65"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative flex-1 aspect-square">
        <Image
          alt="project image"
          src={image}
          fill
          className="rounded-t-2xl object-cover bg-clip-border"
        />
        {isDeveloping && (
          <div className=" absolute bg-green-600/70 text-green-50 text-xs   rounded-full right-2 top-2 flex flex-row-reverse items-center py-1.5 px-2.5 gap-2">
            <Rocket />
            <p className="">در حال توسعه</p>
          </div>
        )}
      </div>

      <div className="bg-zinc-900 py-2 px-4 text-zinc-200 rounded-b-2xl ">
        <p className="flex flex-row-reverse justify-between ">
          {name} <span className="text-zinc-400">{category}</span>
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
