export default function Tools() {
  const tools: string[] = [
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Redux",
    "MongoDB",
    "GraphQL",
    "Next.js",
    "TypeScript",
    "R",
    "R Studio",
    "Git/Github",
    "API",
    "Bootstrap",
    "Tailwind",
    "Svelte",
    "Figma",
    "Trello",
    "Jira Software",
    "Storefront API",
    "Wordpress",
    "Wordpress API",
    "Strapi CMS",
    "PostgreSQL",
    "Astro",
    "InDesign",
    "Illustrator",
    "Photoshop",
    "Spanish (fluent)",
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="sticky top-0 z-20 -mx-3 py-2 mb-4 bg-blue-400/50 backdrop-blur">
        <h2 className="text-2xl pl-3 font-sans">Tools & Skills</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <p
            key={tool}
            className={`rounded-xl p-1.5 bg-blue-300 text-xs hover:scale-125 hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-400 ${index % 2 === 0 ? "hover:-rotate-6" : "hover:rotate-6"} hover:border-blue-800 hover:border-2 border-2 border-blue-300 hover:font-semibold`}
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
