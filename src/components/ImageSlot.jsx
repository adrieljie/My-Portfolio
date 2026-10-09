import { useState } from 'react';
export default function ImageSlot({ src, alt, children, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return <div className={className} {...props}>
    {!loaded && children}
    {src && !failed && <img src={src} alt={alt} decoding="async" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} style={{ opacity: loaded ? 1 : 0 }} />}
  </div>;
}
