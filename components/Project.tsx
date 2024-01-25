import Image from "next/image";
import { LinkIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectProps {
  title: string;
  desc: string;
  img: string;
  link: string;
  tools: string[];
  github: string;
}

export default function Project({
  title,
  desc,
  img,
  tools,
  link,
  github,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 font-bold">
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-2 hover:underline"
        >
          {title}
          <LinkIcon className="w-5 h-5" />
        </a>
        {github && (
          <a href={github} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-5 h-5 hover:cursor-pointer"
            />
          </a>
        )}
      </div>
      <p>{desc}</p>
      <Image src={img} alt={title} width={200} height={100} />
      {tools && (
        <div className="flex gap-2 flex-wrap">
          {tools.map((tool: string) => (
            <p
              key={tool}
              className="border-blue-100 rounded-xl p-1.5 text-blue-600 bg-blue-100 text-xs"
            >
              {tool}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
