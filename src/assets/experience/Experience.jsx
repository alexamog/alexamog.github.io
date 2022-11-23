import experienceList from "./jobHistory";
import ExperienceShowcase from "./ExperienceShowcase";

export default function Experience() {
  return (
    <div>
      {experienceList.map((job) => {
        return <ExperienceShowcase key={job.id} experience={job} />;
      })}
    </div>
  );
}
