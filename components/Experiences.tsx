import Experience from "@/components/Experience";

export default function Experiences() {
  return (
    <div id={"experience"} className="flex flex-col gap-6">
      <div className="sticky top-0 z-20 -mx-3 py-2 mb-4 bg-blue-400/50 backdrop-blur">
        <h2 className="text-2xl pl-3 font-sans">Experience</h2>
      </div>
      <Experience
        date="Jan - Apr 2023"
        role="Frontend Developer"
        title="HeartSet"
        desc="Achieving 2nd place in the BYU-I 2023 Hackathon, I spearheaded a collaborative effort to tackle intricate DOM bugs, employing advanced CSS troubleshooting techniques. This initiative resulted in a seamless and optimized user experience, catering to a diverse audience. My role not only showcased my proficiency in web development but also emphasized my commitment to delivering innovative solutions through effective teamwork."
        link="https://heartset.netlify.app/"
        github="https://github.com/sskiles66/HeartSet"
        tools={[
          "HTML",
          "SCSS",
          "JavaScript",
          "Adobe Illustrator",
          "Adobe Photoshop",
          "C++",
          "C#",
          "Unity",
        ]}
      />
      <Experience
        date="Jan 2023 - Present"
        role="Vice President"
        title="Web Design & Development Society"
        desc="In my role as Vice President of the Web Design & Development Society, I have been dedicated to fostering a collaborative learning environment. I've taken on the responsibility of teaching and sharing knowledge on cutting-edge technologies and tools. Through workshops, mentoring sessions, and collaborative projects, I've contributed to the skill development of society members, empowering them with a versatile set of tools for web design and development. This experience has not only enhanced my leadership and communication skills but has also allowed me to make a lasting impact on the growth and success of the Web Design & Development Society."
        tools={[
          "Next",
          "Tailwind",
          "React",
          "Node",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "SCSS",
          "Git/Github",
          "API",
          "Figma",
          "Wireframing",
          "Adobe Illustrator",
          "Adobe Photoshop",
        ]}
      />
      <Experience
        date="Jan - Apr 2023"
        role="Instructor"
        title="Mathnasium"
        desc="In my role at Mathnasium, I played a crucial part in supporting students with their homework assignments, employing personalized assistance and effective instructional methods to facilitate academic success. I excelled in analyzing situations and distributing my time efficiently across students, ensuring a balanced and productive learning environment. Collaboration was key, and I actively engaged with other instructors, offering guidance and support whenever questions arose. My contributions extended beyond individual interactions, as I contributed to fostering a positive and collaborative atmosphere within Mathnasium's team, a feat achieved at least twice a week. These experiences have significantly contributed to my growth and proficiency in experiential learning projects."
      />
      <Experience
        date="Apr - Jun 2022"
        role="Tutor"
        title="Spanish Lab"
        desc="In my role as a Spanish Tutor within BYU-Idaho's tutoring team, I took pride in assisting individuals in enhancing their Spanish speaking and comprehension skills. My responsibilities extended beyond individual tutoring sessions as I actively contributed to creating a collaborative environment among fellow tutors. By atmosphere for learners to thrive. This experience reflects my commitment to not only guiding individual progress but also contributing to a cohesive and dynamic team dedicated to the enhancement of language learning."
      />
      <Experience
        date="Apr - Jun 2022"
        role="Bootstrap Team"
        title="Data Science Society"
        desc="In my journey, I delved into the realm of data analysis using R, where I meticulously studied the language to interpret and visualize complex data sets, transforming numbers into insightful plots and graphs. When faced with conflicts in code, I applied a problem-solving approach grounded in thorough research and collaborative efforts. These experiences have honed my analytical skills and ability to navigate challenges, enriching my proficiency in handling diverse aspects of data analysis and coding intricacies."
        tools={["R", "R Studio"]}
      />
      <Experience
        date="May - Nov 2022"
        role="Delivery & Pizza Maker"
        title="Doorzza"
        desc="Led Doorzza's pizza-making team, overseeing food preparation and delivery. Analyzed order-processing software, supported team members, and managed kitchen operations. Mentored delivery drivers to enhance productivity. Fostered a positive team environment for 3-4 days a week, 5 hours each day. Ensured prompt food delivery in under 45 minutes, contributing to customer satisfaction."
      />
    </div>
  );
}
