import Image from "next/image";
import Link from "next/link";

function ProjectCard({ name, href, image, category }) {
  return (
    <Link
      href={href}
      className="size-60"
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
