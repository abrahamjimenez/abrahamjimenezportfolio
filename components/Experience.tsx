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
  tools?: string[];
}

export default function Experience({
  date,
  role,
  title,
  desc,
  link,
  github,
  tools,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs">{date}</p>
      {link ? (
        <h3>
          <a
            href={link}
            target="_blank"
            className="font-bold flex items-center gap-2 hover:text-blue-600 font-sans tracking-wider group"
          >
            {role} &middot; {title}
            {link && (
              <LinkIcon className="w-5 h-5 transition-transform group-hover:-scale-125" />
            )}
          </a>
        </h3>
      ) : (
        <h3 className="font-bold flex items-center gap-2 font-sans tracking-wider group">
          {role} &middot; {title}
        </h3>
      )}
      {github && (
        <a href={github} target="_blank" aria-label={"Github"}>
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5 transition-transform hover:cursor-pointer hover:scale-150 hover:text-blue-500"
          />
        </a>
      )}
      <p>{desc}</p>
      {tools && (
        <div className="flex gap-2 flex-wrap">
          {tools.map((tool, index) => (
            <p
              key={tool}
              className={`transition-transform rounded-xl p-1.5 bg-blue-300 text-xs lg:hover:scale-125 lg:hover:-translate-y-1 lg:hover:translate-x-1 lg:hover:bg-blue-400 ${index % 2 === 0 ? "lg:hover:-rotate-6" : "lg:hover:rotate-6"} lg:hover:border-blue-800 lg:hover:border-2 border-2 border-blue-300 lg:hover:font-semibold`}
            >
              {tool}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
