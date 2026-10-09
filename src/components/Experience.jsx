import Reveal from './Reveal.jsx';
export default function Experience() { return (
<section className="experience section-shell" id="experience" aria-labelledby="experience-heading">
      <Reveal className="section-marker"><span>03 / ORGANIZATIONAL EXPERIENCE</span><span>Growing, together.</span></Reveal>
      <Reveal className="section-heading"><h2 id="experience-heading">Beyond the code<span className="muted">.</span></h2><p>Communication, collaboration,<br />and a little creative direction.</p></Reveal>
      <div className="experience-layout">
        <div className="experience-aside"><Reveal className="experience-intro"><img src="assets/logo-bncc.webp" alt="BNCC — Bina Nusantara Computer Club" width="220" height="66" loading="lazy" /><p>A place to contribute.<br />A community to grow with.</p></Reveal></div>
        <div className="timeline">
          <Reveal as="article" className="experience-entry" delay={80}><span className="timeline-dot" aria-hidden="true"></span><p className="eyebrow">DEC 2025 — PRESENT</p><h3>Public Relations Manager</h3><p>Leading a three-member PR team, from task distribution and workflow to execution. Collaborating with companies and communities to support BNCC’s programs, partnerships, and brand visibility.</p><ul><li>Planned and oversaw PR activities for 3+ events with external partners.</li><li>Developed social media guidelines for the 2025/2026 period.</li><li>Reviewed 5+ posts for quality and consistency, each reaching over 1,000 views.</li></ul><div className="experience-stats"><p><strong>3</strong><span>Team members</span></p><p><strong>10+</strong><span>Companies & communities</span></p></div></Reveal>
          <Reveal as="article" className="experience-entry" delay={80}><span className="timeline-dot" aria-hidden="true"></span><p className="eyebrow">DEC 2024 — NOV 2025</p><h3>Public Relations Activist</h3><p>Created reels and microblog posts for BNCC’s social media, generating over 4,000 views per reel and 90+ likes per microblog post.</p><ul><li>Coordinated 20+ media partners and communities for BNCC Slice of Life 2025.</li><li>Supported coordination with 20+ media partners and communities for BNCC Innovation Lab 2025.</li></ul></Reveal>
        </div>
      </div>
    </section>
); }
