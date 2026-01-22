import "../css/Projects.css";

function Projects() {
  const projects = [
    {
      title: "To Do App",
      desc: "Task management app with filters and localStorage",
      github: "https://github.com/eneshan1506/todo-app",
      live: "https://todo-app-three-liard-77.vercel.app/",
    },
    {
      title: "Weather App",
      desc: "Search city weather + 5-day forecast (Open-Meteo)",
      github: "https://github.com/eneshan1506/weather-app",
      live: "https://weather-app-topaz-ten-24.vercel.app/",
    },
    {
      title: "Calculator App",
      desc: "Calculator with keyboard support (Enter, Backspace, Esc)",
      github: "https://github.com/eneshan1506/calculator-app",
      live: "https://calculator-app-topaz-pi-54.vercel.app/",
    },
    { title: "Movie Search", desc: "Search movies app" },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <div style={{ display: "flex", gap: "14px" }}>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
