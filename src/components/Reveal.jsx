import { createContext, useContext, useRef } from 'react';
import { useReveal } from '../hooks/motion.js';
export const MotionContext = createContext(false);
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...props }) {
  const ref = useRef(null);
  const reduced = useContext(MotionContext);
  useReveal(ref, reduced);
  return <Tag ref={ref} className={`reveal ${className}`} data-delay={delay} {...props}>{children}</Tag>;
}
