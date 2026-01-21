import "../css/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const handleClick = (key) => {
    setActive(key);
    setOpen(false); // linke basınca menü kapansın
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => handleClick("home")}>
        <a href="#home">
          <span>E</span>H
        </a>
      </div>

      <button
        className="burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((p) => !p)}
      >
        <span className={open ? "line line1 open" : "line line1"} />
        <span className={open ? "line line2 open" : "line line2"} />
        <span className={open ? "line line3 open" : "line line3"} />
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
