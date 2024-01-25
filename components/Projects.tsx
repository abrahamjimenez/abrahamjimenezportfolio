import Project from "@/components/Project";

interface Tools {
  tools?: string[];
}

export default function Projects({ tools }: Tools) {
  return (
    <>
      <h2 className="text-2xl">Projects</h2>
      <Project
        title="Book of Mormon English Learning App"
        desc="Spearheaded the creation of a personalized project aimed at enhancing
        the client's English proficiency. Leveraging my skills in web
        development, I meticulously crafted the project using a combination of
        HTML, CSS, and JavaScript. This initiative involved integrating an API
        to provide a dynamic and engaging learning experience tailored to their
        language improvement goals. Through this endeavor, I demonstrated my
        ability to not only develop functional and user-friendly web
        applications but also to contribute to personalized learning solutions
        for language enhancement."
        img="/book-of-mormon.webp"
        tools={["HTML", "CSS", "JavaScript", "FetchAPI", "Web Speech API"]}
        link="https://book-of-mormon-english-learning.netlify.app/"
      />
    </>
  );
}
