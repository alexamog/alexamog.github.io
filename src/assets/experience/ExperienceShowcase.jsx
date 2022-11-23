import { Heading } from "@chakra-ui/react";

export default function ExperienceShowcase({ experience }) {
  return (
    <div>
      <Heading></Heading>
      <h2>{experience.company}</h2>
      <img src={experience.image} style={{}} />
      <p>Skills used:</p>
      <ul>
        {experience.skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
