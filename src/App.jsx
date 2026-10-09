import { useEffect, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import { MotionContext } from './components/Reveal.jsx';
import { useReducedMotion, useScrollProgress } from './hooks/motion.js';

export default function App() {
  const reduced = useReducedMotion();
  const progress = useRef(null);
  const timer = useRef(null);
  const [toast, setToast] = useState('');
  useScrollProgress(progress, reduced);
  useEffect(() => () => clearTimeout(timer.current), []);
  const showToast = message => {
    setToast(message);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(''), 3500);
  };
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('adrieljie2708@gmail.com');
      showToast('Email copied. Let’s connect!');
    } catch { showToast('Email: adrieljie2708@gmail.com'); }
  }
  return <MotionContext.Provider value={reduced}>
    <div className="scroll-progress" ref={progress} aria-hidden="true" hidden={reduced} />
    <a className="skip-link" href="#main">Skip to content</a>
    <Header />
    <main id="main"><Hero /><About /><Projects /><Experience /><Contact onCopyEmail={copyEmail} /></main>
    <div className={`toast ${toast ? 'visible' : ''}`} role="status" aria-live="polite">{toast}</div>
  </MotionContext.Provider>;
}
