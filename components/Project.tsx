import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface ProjectProps {
  title: string;
  desc: string;
  img: string;
  link: string;
  tools: string[];
}

export default function Project({
  title,
  desc,
  img,
  tools,
  link,
}: ProjectProps) {
  return (
    <>
      <h3 className="font-bold flex items-center gap-2 hover:underline hover:text-slate-800 hover:cursor-pointer">
        <a href={link} target="_blank">
          {title}
        </a>
        <ArrowUpRightIcon className="w-5 h-5" />
      </h3>
      <p>{desc}</p>
      <Image src={img} alt={title} width={100} height={200} />
      {tools && (
        <div className="flex gap-2">
          {tools.map((tool: string) => (
            <p key={tool} className="border-2 border-blue-100 rounded">
              {tool}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
