import { useEffect, useRef } from 'react';

// Lightweight matrix-rain background rendered on a full-viewport canvas.
export default function MatrixCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext('2d');
    const glyphs = '01ABCDEF$#@&%<>/\\{}[]'.split('');
    let cols, drops, raf, last = 0;

    const resize = () => {
      cv.width = window.innerWidth;
      cv.height = window.innerHeight;
      cols = Math.floor(cv.width / 16);
      drops = Array(cols).fill(1);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 55) return;
      last = t;
      ctx.fillStyle = 'rgba(10,14,20,0.08)';
      ctx.fillRect(0, 0, cv.width, cv.height);
      ctx.fillStyle = '#ff3344';
      ctx.font = '14px monospace';
      for (let i = 0; i < drops.length; i++) {
        const ch = glyphs[(Math.random() * glyphs.length) | 0];
        ctx.fillText(ch, i * 16, drops[i] * 16);
        if (drops[i] * 16 > cv.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="matrix" ref={ref} aria-hidden="true" />;
}
