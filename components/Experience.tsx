import { LinkIcon } from "@heroicons/react/24/solid";

export default function Experience() {
  return (
    <>
      <h2 className="text-2xl">Experience</h2>
      <p>Jan - Apr 2023</p>
      <p>Frontend Developer &middot; HeartSet</p>
      <p>
        Engaged in team-based problem-solving to address intricate DOM bugs,
        implementing CSS troubleshooting techniques for a seamless and improved
        user experience across a diverse user base.
      </p>
      {/* TODO turn into icon component */}
      <a
        href="https://heartset.netlify.app/"
        target="_blank"
        className="flex gap-2 items-center"
      >
        <LinkIcon className="h-5 w-5" />
        HeartSet
      </a>
    </>
  );
}
