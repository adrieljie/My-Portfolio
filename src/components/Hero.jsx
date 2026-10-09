export default function Hero() {
  return <section className="hero" id="home" aria-labelledby="hero-heading">
    <div className="hero-glow" aria-hidden="true" />
    <img className="hero-mountain" src="assets/mountain.webp" alt="" fetchPriority="high" width="1900" height="976" />
    <div className="hero-content">
      <p className="eyebrow hero-eyebrow">AI & Software Development <span className="tiny-cross" aria-hidden="true">+</span> A personal collection</p>
      <h1 id="hero-heading"><span className="sr-only">Portfolio — Adriel Agustinus Jie</span><img className="portfolio-title" src="assets/title-portfolio.svg" alt="" width="763" height="260" /></h1>
      <div className="hero-name-row"><p>Adriel Agustinus Jie</p><span className="year-label">2026</span></div>
      <div className="hero-subtitle"><p>Bina Nusantara University<br /><span>Computer Science · Artificial Intelligence</span></p><a className="round-arrow" href="#projects" aria-label="Explore selected projects">↘</a></div>
    </div>
    <div className="hero-bottom"><span>Thoughtful code. Meaningful impact.</span><a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a></div>
  </section>;
}
