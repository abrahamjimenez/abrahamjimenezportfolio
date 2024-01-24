import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="px-3 py-4">
      <h1 className="text-3xl">Abraham Jimenez</h1>
      <p>I love making websites</p>
      <p>[Github] [LinkedIn] [Email]</p>

      {/* About */}
      <About />
      {/* Experience */}
      <Experience />
      {/* Projects */}
      <Projects />
    </div>
  );
}
