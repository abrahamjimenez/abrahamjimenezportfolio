"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const navigationItems = [
    { id: "about", label: "About" },
    { id: "tools&skills", label: "Tools & Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Abraham Jimenez</h1>
      <h2 className="text-2xl font-sans">Full-stack developer</h2>
      {navigationItems.map((nav) => (
        <a
          key={nav.id}
          href={`#${nav.id}`}
          className={"hover:text-blue-600 transition-transform hover:scale-125"}
        >
          {nav.label}
        </a>
      ))}
      <div className="flex gap-4 pb-4">
        <a
          href="https://github.com/abrahamjimenez"
          target="_blank"
          aria-label={"Github"}
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5 transition-transform hover:cursor-pointer hover:scale-150 hover:text-blue-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abrahamjimenezromo/"
          className="w-5 h-5 transition-transform hover:cursor-pointer hover:scale-150 hover:text-blue-500"
          target="_blank"
          aria-label={"LinkedIn"}
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
