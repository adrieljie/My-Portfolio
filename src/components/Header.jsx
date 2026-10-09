import { useEffect, useRef, useState } from 'react';
export default function Header() {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    const onOutside = event => { if (!header.current?.contains(event.target)) setOpen(false); };
    const breakpoint = matchMedia('(max-width: 760px)');
    const close = () => setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onOutside);
    breakpoint.addEventListener('change', close);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('click', onOutside); breakpoint.removeEventListener('change', close); };
  }, [open]);
  return <header className="site-header" ref={header}>
    <a className="wordmark" href="#home" aria-label="Adriel Jie, home" onClick={() => setOpen(false)}>Adriel Jie</a>
    <nav className="desktop-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#experience">Experience</a></nav>
    <a className="header-contact" href="#contact">Let’s connect</a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(value => !value)}><span /><span /></button>
    <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" data-open={open} aria-hidden={!open} inert={!open}>
      <a href="#about" onClick={() => setOpen(false)}>About</a><a href="#projects" onClick={() => setOpen(false)}>Projects</a><a href="#experience" onClick={() => setOpen(false)}>Experience</a><a href="#contact" onClick={() => setOpen(false)}>Contact ↗</a>
    </nav>
  </header>;
}
