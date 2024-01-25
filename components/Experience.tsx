import { LinkIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ExperienceProps {
  date: string;
  role: string;
  title: string;
  desc: string;
  link?: string;
  github?: string;
}

export default function Experience({
  date,
  role,
  title,
  desc,
  link,
  github,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs">{date}</p>
      <a
        href={link}
        target="_blank"
        className="font-bold flex items-center gap-2 hover:underline"
      >
        {role} &middot; {title}
        {link && <LinkIcon className="w-5 h-5" />}
      </a>

      {github && (
        <a href={github} target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5 hover:cursor-pointer"
          />
        </a>
      )}
      <p>{desc}</p>
    </div>
  );
}
