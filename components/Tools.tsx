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

      {/*<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">*/}
      {/*</div>*/}

      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <p
            key={tool}
            className="border-blue-100 rounded-xl p-1.5 bg-blue-300 text-xs"
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
