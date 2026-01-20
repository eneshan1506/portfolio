import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <h1>Hi, I'm Enes HAN</h1>
      <h2>Frontend Developer</h2>
      <p>I build React applications.</p>

      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="hero-btn"
      >
        GitHub
      </a>
    </section>
  );
}

export default Hero;
