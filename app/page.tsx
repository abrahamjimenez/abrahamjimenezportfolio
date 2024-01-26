import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      <About />
      <Tools />
      <Experiences />
      <Projects />
    </div>
  );
}
