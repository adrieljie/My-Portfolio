import Reveal from './Reveal.jsx';
import ImageSlot from './ImageSlot.jsx';
import { portfolio } from '../content.js';
export default function About() {
  const [portraitWidth, portraitHeight] = portfolio.portraitSize;
  const { left = 0, right = 0, bottom = 0 } = portfolio.portraitFrameInset || {};
  const visibleWidth = portraitWidth - left - right;
  const visibleHeight = portraitHeight - bottom;
  const frameHeight = visibleHeight * (1 + portfolio.portraitHeadroom);
  const portraitStyle = {
    '--portrait-ratio': visibleWidth / frameHeight,
    '--portrait-image-scale': portraitWidth / visibleWidth,
    '--portrait-image-left': `${-left / visibleWidth * 100}%`,
    '--portrait-image-bottom': `${-bottom / frameHeight * 100}%`,
  };
  return (
<section className="about section-shell" id="about" aria-labelledby="about-heading">
      <Reveal className="section-marker"><span>01 / THE PERSON</span><span>Curiosity, with purpose.</span></Reveal>
      <div className="about-grid">
        <div className="about-copy">
          <Reveal as="h2" id="about-heading"><span className="sr-only">About Me</span><img src="assets/title-about.svg" alt="" width="641" height="169" loading="lazy" /></Reveal>
          <Reveal as="p" className="about-intro" delay={50}>Hi! I’m <strong>Adriel Agustinus Jie</strong>, a Computer Science student focusing on <strong>Artificial Intelligence.</strong></Reveal>
          <Reveal as="p" delay={100}>I’m passionate about building AI-powered software that solves everyday problems and makes a positive impact on the people around me and the wider community. Beyond functionality, I care about intuitive, thoughtful designs that make my projects easy and enjoyable to use.</Reveal>
          <Reveal as="p" delay={140}>I’m seeking opportunities in AI and software development to gain real-world experience, learn from experienced professionals, and contribute to meaningful projects.</Reveal>
          <a className="text-link" href="https://www.linkedin.com/in/adrieljie" target="_blank" rel="noopener noreferrer">More about me on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <Reveal className="portrait-reveal" delay={130}><figure className="portrait-frame"><ImageSlot key={portfolio.portrait} src={portfolio.portrait} alt="Portrait of Adriel Agustinus Jie" className="portrait-slot" id="portrait-slot" style={portraitStyle}><span className="frame-corner tl"></span><span className="frame-corner br"></span><svg viewBox="0 0 80 90" aria-hidden="true"><circle cx="40" cy="25" r="14"/><path d="M13 77v-5c0-17 11-27 27-27s27 10 27 27v5"/></svg><span className="placeholder-title">A face to the name.</span><span className="placeholder-note">Portrait coming soon</span></ImageSlot><figcaption>Adriel Agustinus Jie <span>BINUS University</span></figcaption></figure></Reveal>
      </div>
      <Reveal className="focus-row"><span className="eyebrow">Where my interests meet</span><p>Artificial intelligence <span>×</span> Software development <span>×</span> Thoughtful design</p></Reveal>
    </section>
); }
