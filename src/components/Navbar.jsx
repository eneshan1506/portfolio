import "../css/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar">
      <a href="#home" className="logo" onClick={() => setActive("home")}>
        <span>E</span>H
      </a>

      <ul className="nav-links">
        <li>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setActive("projects")}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setActive("about")}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setActive("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
