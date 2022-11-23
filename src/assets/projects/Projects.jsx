import ProjectList from "./ProjectList";
import projects from "./projects";
export default function Projects() {
  return (
    <div>
      <ProjectList projects={projects} />
    </div>
  );
}
