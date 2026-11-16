'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// Same behaviour as the "Preloader Plus" plugin: shown on the first load, fades out 500 ms after
// the page has loaded (1000 ms fade). Not shown again on client-side navigation.
export default function Preloader() {
  const [state, setState] = useState<'visible' | 'fading' | 'hidden'>('visible');

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;
    const done = () => {
      fadeTimer = setTimeout(() => setState('fading'), 500);
      hideTimer = setTimeout(() => setState('hidden'), 1500);
    };
    if (document.readyState === 'complete') done();
    else window.addEventListener('load', done, { once: true });
    return () => {
      window.removeEventListener('load', done);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (state === 'hidden') return null;
  return (
    <div className={`preloader-plus${state === 'fading' ? ' complete' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        {/* Animated GIF: served as is (unoptimized), loaded right away. */}
        <Image className="preloader-custom-img" src="/wp-content/uploads/2024/01/born2be-preloader.gif" alt="" width={300} height={300} unoptimized loading="eager" />
      </div>
    </div>
  );
}
