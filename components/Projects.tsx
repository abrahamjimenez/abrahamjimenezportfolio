import Project from "@/components/Project";

export default function Projects() {
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
      <Project
        title="Abraham’s Shop"
        desc="Successfully led the development of Abraham's Shop, an innovative e-commerce site utilizing the MERN stack, featuring seamless PayPal integration, robust admin capabilities, and secure routes to showcase proactive initiative and dynamic web development skills."
        img="/abrahams-shop.webp"
        tools={[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Redux",
          "Express.js",
          "MongoDB",
          "JSON Web Token",
          "Cookie-Parser",
          "Bcrypt",
          "Nodemon",
          "Dotenv",
          "Concurrently",
        ]}
        link="https://proshop-ku28.onrender.com"
      />
    </>
  );
}
