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
    <div id={"tools&skills"} className="flex flex-col gap-2">
      <div className="sticky top-0 z-20 -mx-3 py-2 mb-4 bg-blue-400/50 backdrop-blur">
        <h2 className="text-2xl pl-3 font-sans">Tools & Skills</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <p
            key={tool}
            className={`rounded-xl p-1.5 bg-blue-300 text-xs lg:hover:scale-125 lg:hover:-translate-y-1 lg:hover:translate-x-1 lg:hover:bg-blue-400 ${index % 2 === 0 ? "lg:hover:-rotate-6" : "lg:hover:rotate-6"} lg:hover:border-blue-800 lg:hover:border-2 border-2 border-blue-300 lg:hover:font-semibold`}
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
