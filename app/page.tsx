import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      {/* About */}
      <About />
      {/* Experience */}
      <Experience />
      {/* Projects */}
      <Projects />
    </div>
  );
}
