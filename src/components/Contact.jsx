import Reveal from './Reveal.jsx';
export default function Contact({ onCopyEmail }) {
return (
<section className="contact section-shell" id="contact" aria-labelledby="contact-heading">
      <img className="contact-mountain" src="assets/mountain.webp" alt="" width="1900" height="976" loading="lazy" />
      <div className="contact-inner"><Reveal className="section-marker"><span>04 / LET’S CONNECT</span><span>Every good idea starts somewhere.</span></Reveal>
        <div className="contact-main"><Reveal as="h2" id="contact-heading"><span className="sr-only">Thank you</span><img src="assets/title-thankyou.svg" alt="" width="805" height="352" loading="lazy" /></Reveal><Reveal className="contact-copy" delay={120}><p>Have an opportunity in mind?<br />I’d love to hear from you.</p><a className="contact-email" href="mailto:adrieljie2708@gmail.com">adrieljie2708@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a className="phone-link" href="tel:+6282129025174">Mobile Phone <span aria-hidden="true">↗</span></a><a href="https://www.linkedin.com/in/adrieljie" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/adrieljie" target="_blank" rel="noopener noreferrer">GitHub ↗</a><button id="copy-email" onClick={onCopyEmail}>Copy email <span aria-hidden="true">⧉</span></button></div></Reveal></div>
        <footer><p>Adriel Agustinus Jie <span>© 2026</span></p><span className="footer-field">AI & Software Development</span><a href="#home">Back to top ↑</a></footer>
      </div>
    </section>
); }
