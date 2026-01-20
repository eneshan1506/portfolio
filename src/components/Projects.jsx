import "../css/Projects.css";

function Projects() {
  const projects = [
    { title: "To Do App", desc: "Simple task manager" },
    { title: "Weather App", desc: "Weather API app" },
    { title: "Calculator", desc: "Basic calculator" },
    { title: "Movie Search", desc: "Search movies app" },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
