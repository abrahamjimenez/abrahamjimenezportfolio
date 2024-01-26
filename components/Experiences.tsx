import Experience from "@/components/Experience";

export default function Experiences() {
  return (
    <>
      <h2 className="text-2xl">Experience</h2>
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
        tools={["R", "RStudio"]}
      />
      <Experience
        date="May - Nov 2022"
        role="Delivery & Pizza Maker"
        title="Doorzza"
        desc="Led Doorzza's pizza-making team, overseeing food preparation and delivery. Analyzed order-processing software, supported team members, and managed kitchen operations. Mentored delivery drivers to enhance productivity. Fostered a positive team environment for 3-4 days a week, 5 hours each day. Ensured prompt food delivery in under 45 minutes, contributing to customer satisfaction."
      />
    </>
  );
}
