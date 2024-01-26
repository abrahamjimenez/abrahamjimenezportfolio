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
      <h2 className="text-2xl">Tools & Skills</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <p
            key={tool}
            className="border-blue-100 rounded-xl p-1.5 text-blue-600 bg-blue-100 text-xs"
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
}
