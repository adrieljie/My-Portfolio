import { useEffect, useRef, useState } from 'react';
import { portfolio } from '../content.js';
import Reveal from './Reveal.jsx';
import ImageSlot from './ImageSlot.jsx';

const pad = number => String(number).padStart(2, '0');
function ProjectArrow({ previous = false }) {
  return <span aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d={previous ? 'M19 12H5m6-6-6 6 6 6' : 'M5 12h14m-6-6 6 6-6 6'} /></svg></span>;
}
function ImageIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="4" width="26" height="24" rx="1" /><circle cx="11" cy="12" r="3" /><path d="m4 25 9-9 6 6 4-4 6 7" /></svg>;
}
function ProjectScreen({ project, secondary = false }) {
  const label = secondary ? project.secondaryLabel : project.primaryLabel;
  const src = secondary ? project.secondaryScreenshot : project.screenshot;
  const [width, height] = (secondary ? project.secondaryScreenshotSize : project.screenshotSize) || (secondary ? [4, 3] : [16, 10]);
  return <div className={`screen ${secondary ? 'screen-secondary' : 'screen-main'}`} style={{ '--screen-ratio': width / height }}>
    <ImageSlot key={src || label} src={src} alt={`${project.name} — ${label}`} className="screen-body">
      <span className="screen-index">{secondary ? '02 / DETAIL' : '01 / OVERVIEW'}</span><ImageIcon />
      <span className="preview-caption">{label}</span><span className="preview-note">Screenshot placeholder</span>
    </ImageSlot>
  </div>;
}
export function ProjectArticle({ project, index, total }) {
  return <article aria-label={project.name} className="project-article">
    <div className="project-info">
      <div className="project-meta">
        {project.logo ? <img className="project-logo" src={project.logo} alt={project.name} width="155" height="63" /> : <div className="project-logo-text" aria-label="Sumber Anugerah">SA</div>}
        <dl><div><dt>Year</dt><dd>{project.year}</dd></div><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Project type</dt><dd>{project.type}</dd></div></dl>
        <a className="project-repo" href={project.repo} target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
      </div>
      <div className="project-description">
        <div className="project-overview-top"><span>{project.name} / {project.category}</span><span>{pad(index + 1)} / {pad(total)}</span></div>
        <h3>{project.summary}</h3><p>{project.description}</p><p>{project.story}</p>
        <div className="tech-stack" aria-label="Technologies">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
      </div>
    </div>
    <div className="project-stage" data-project={project.id}>
      <div className="project-scene">
        <img className="stage-stone" src="assets/stone-plinth-hd.png" alt="" width="2172" height="724" loading="lazy" />
        <div className="project-screens"><ProjectScreen project={project} secondary /><ProjectScreen project={project} /></div>
      </div>
      <span className="stage-label">{project.name} · {project.year}</span>
    </div>
  </article>;
}
export default function Projects() {
  const [current, setCurrent] = useState(0);
  const tabs = useRef([]);
  const projects = portfolio.projects;
  const project = projects[current];
  useEffect(() => {
    const tab = tabs.current[current];
    const row = tab?.parentElement;
    if (!row) return;
    function keepSelectedVisible() {
      const left = tab.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft;
      if (left < row.scrollLeft || left + tab.offsetWidth > row.scrollLeft + row.clientWidth) {
        row.scrollTo({
          left: Math.max(0, left - (row.clientWidth - tab.offsetWidth) / 2),
          behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        });
      }
    }
    keepSelectedVisible();
    const observer = new ResizeObserver(keepSelectedVisible);
    observer.observe(row);
    return () => observer.disconnect();
  }, [current]);
  function choose(index, focus = false) {
    const next = (index + projects.length) % projects.length;
    setCurrent(next);
    if (focus) tabs.current[next]?.focus({ preventScroll: true });
  }
  function onTabKey(event) {
    const targets = { ArrowRight: current + 1, ArrowLeft: current - 1, Home: 0, End: projects.length - 1 };
    if (event.key in targets) { event.preventDefault(); choose(targets[event.key], true); }
  }
  return <section className="work section-shell" id="projects" aria-labelledby="projects-heading">
    <Reveal className="section-marker"><span>02 / SELECTED PROJECTS</span><span>Ideas, made tangible.</span></Reveal>
    <Reveal className="section-heading"><h2 id="projects-heading">Selected projects<span className="muted">.</span></h2><p>A collection of things I’ve built<br />to make everyday life a little better.</p></Reveal>
    <Reveal className="project-switcher" delay={60} role="group" aria-label="Project navigation">
      <button className="project-arrow" onClick={() => choose(current - 1)} aria-label="Previous project" aria-controls="project-panel"><ProjectArrow previous /></button>
      <div className="project-tabs" role="tablist" aria-label="Choose a project" id="project-tabs" onKeyDown={onTabKey}>
      {projects.map((item, index) => <button key={item.id} ref={element => { tabs.current[index] = element; }} className="project-tab" role="tab" id={`tab-${item.id}`} aria-controls="project-panel" aria-selected={index === current} tabIndex={index === current ? 0 : -1} onClick={() => choose(index)}><span>{pad(index + 1)}</span>{item.name}</button>)}
      </div>
      <button className="project-arrow" onClick={() => choose(current + 1)} aria-label="Next project" aria-controls="project-panel"><ProjectArrow /></button>
    </Reveal>
    <div className="project-panel" id="project-panel" role="tabpanel" tabIndex={0} aria-labelledby={`tab-${project.id}`}>
      <ProjectArticle key={project.id} project={project} index={current} total={projects.length} />
    </div>
    <p className="sr-only" role="status" aria-live="polite">Project {current + 1} of {projects.length}: {project.name}</p>
  </section>;
}
