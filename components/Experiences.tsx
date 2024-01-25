import Experience from "@/components/Experience";

export default function Experiences() {
  return (
    <>
      <h2 className="text-2xl">Experience</h2>
      <Experience
        date="Jan - Apr 2023"
        role="Frontend Developer"
        title="HeartSet"
        desc="Engaged in team-based problem-solving to address intricate DOM bugs,
        implementing CSS troubleshooting techniques for a seamless and improved
        user experience across a diverse user base."
        link="https://heartset.netlify.app/"
        github="https://github.com/sskiles66/HeartSet"
      />
      <Experience
        date="Apr - Jun 2022"
        role="Tutor"
        title="Spanish Lab"
        desc="In my role as a Spanish Tutor within BYU-Idaho's tutoring team, I took pride in assisting individuals
        in enhancing their Spanish speaking and comprehension skills. My responsibilities extended beyond individual
        tutoring sessions as I actively contributed to creating a collaborative environment among fellow tutors. By
        fostering teamwork, we aimed to address challenges efficiently and innovatively, ensuring a supportive
        atmosphere for learners to thrive. This experience reflects my commitment to not only guiding individual
        progress but also contributing to a cohesive and dynamic team dedicated to the enhancement of language learning."
      />
    </>
  );
}
