import { useEffect, useState } from 'react';

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const change = () => setReduced(media.matches);
    change();
    media.addEventListener('change', change);
    return () => media.removeEventListener('change', change);
  }, []);
  return reduced;
}

export function useReveal(ref, reduced) {
  useEffect(() => {
    const node = ref.current;
    if (!node || reduced || !('IntersectionObserver' in window)) return;
    let animation;
    let waiting = node.getBoundingClientRect().top >= window.innerHeight * 0.92;
    if (waiting) node.dataset.reveal = 'waiting';
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.removeAttribute('data-reveal');
          if (waiting && typeof node.animate === 'function') {
            animation?.cancel();
            animation = node.animate([
              { opacity: 0, transform: 'translate3d(0, 34px, 0)' },
              { opacity: 1, transform: 'translate3d(0, 0, 0)' },
            ], {
              duration: 820,
              delay: Number(node.dataset.delay || 0),
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              fill: 'backwards',
            });
          }
          waiting = false;
        } else if (entry.boundingClientRect.top > window.innerHeight) {
          // Rearm only after the element is below the viewport, for the next downward visit.
          waiting = true;
          animation?.cancel();
          node.dataset.reveal = 'waiting';
        }
      }
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
    observer.observe(node);
    const revealOnFocus = () => {
      waiting = false;
      animation?.cancel();
      node.removeAttribute('data-reveal');
    };
    node.addEventListener('focusin', revealOnFocus);
    return () => {
      observer.disconnect();
      animation?.cancel();
      node.removeAttribute('data-reveal');
      node.removeEventListener('focusin', revealOnFocus);
    };
  }, [ref, reduced]);
}

export function useScrollProgress(ref, reduced) {
  useEffect(() => {
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? clamp(window.scrollY / max, 0, 1) : 0})`;
      });
    };
    if (reduced) return;
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [ref, reduced]);
}
