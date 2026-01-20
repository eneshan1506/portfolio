import "../css/About.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiCypress } from "react-icons/si";

function About() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiCypress />, name: "Cypress" },
  ];

  return (
    <section className="about" id="about">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
