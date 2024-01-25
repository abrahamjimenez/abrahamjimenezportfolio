import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      {/* About */}
      <About />
      {/* Experience */}
      <Experiences />
      {/* Projects */}
      <Projects />
    </div>
  );
}
