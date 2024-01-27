"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Abraham Jimenez</h1>
      <h2 className="text-2xl font-sans">Full-stack developer</h2>

      <a
        href="#about"
        className={
          "hover:text-blue-600 transition-transform hover:translate-x-5"
        }
      >
        About
      </a>
      <a
        href="#tools&skills"
        className={
          "hover:text-blue-600 transition-transform hover:translate-x-5"
        }
      >
        Tools & Skills
      </a>
      <a
        href="#experience"
        className={
          "hover:text-blue-600 transition-transform hover:translate-x-5"
        }
      >
        Experience
      </a>
      <a
        href="#projects"
        className={
          "hover:text-blue-600 transition-transform hover:translate-x-5"
        }
      >
        Projects
      </a>

      <div className="flex gap-4 pb-4">
        <a href="https://github.com/abrahamjimenez" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="w-5 h-5 hover:cursor-pointer hover:scale-150 hover:text-blue-500"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abrahamjimenezromo/"
          className="w-5 h-5 hover:cursor-pointer hover:scale-150 hover:text-blue-500"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
