export default function ProjectShowcase({ project }) {
  return (
    <div>
      <h1>{project.name}</h1>
      <img height="400px" width="400px" src={project.image} />
    </div>
  );
}
