import "../css/Contact.css";

function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2>Contact</h2>

      <p>Email: eneshan0646@gmail.com</p>

      <div className="links">
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
        <p className="copyright">
        © {new Date().getFullYear()} Enes HAN All rights reserved.
      </p>
    </footer>
  );
}

export default Contact;
