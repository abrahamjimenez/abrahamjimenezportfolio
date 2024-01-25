import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Abraham Jimenez</h1>
      <h2 className="text-2xl">Full-stack developer</h2>
      <div className="flex gap-4 pb-4">
        <a href="https://github.com/abrahamjimenez" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5 " />
        </a>
        <a
          href="https://www.linkedin.com/in/abrahamjimenezromo/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
