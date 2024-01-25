import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

interface ExperienceProps {
  date: string;
  role: string;
  title: string;
  desc: string;
  link: string;
}

export default function Experience({
  date,
  role,
  title,
  desc,
  link,
}: ExperienceProps) {
  return (
    <>
      <p className="text-xs">{date}</p>
      <a
        href={link}
        target="_blank"
        className="font-bold flex items-center gap-2 hover:underline hover:text-slate-800 hover:cursor-pointer"
      >
        {role} &middot; {title}
        <ArrowUpRightIcon className="w-5 h-5" />
      </a>
      <p>{desc}</p>
    </>
  );
}
