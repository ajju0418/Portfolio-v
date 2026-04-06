import { useEffect, useRef } from 'react';

/* ── Page Loader ── */
export function PageLoader({ done }) {
  return (
    <div className={`loader${done ? ' done' : ''}`}>
      <div className="loader-mono">VA<span>.</span></div>
      <div className="loader-bar" />
    </div>
  );
}

/* ── Particle / Grid Canvas ── */
export function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let id, W, H;
    const pts = [];
    const N = 60;
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < N; i++) pts.push({ x: Math.random() * 1600, y: Math.random() * 900, r: Math.random() * 1.4 + 0.3, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, a: Math.random() * .4 + .1, color: Math.random() > 0.5 ? 'purple' : 'pink' });
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // Grid with purple tint
      ctx.strokeStyle = 'rgba(168,85,247,0.03)'; ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 80) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += 80) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
      // Particles with purple/pink colors
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color === 'purple' ? `rgba(168,85,247,${p.a})` : `rgba(244,114,182,${p.a * 0.8})`; ctx.fill();
      }
      // Connect particles
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(168,85,247,${.06 * (1 - d / 100)})`;
          ctx.lineWidth = .5;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="p-canvas" style={{ width: '100%', height: '100%' }} />;
}

/* ── Back To Top ── */
export function BackToTop() {
  const ref = useRef(null);
  useEffect(() => {
    const h = () => { if (ref.current) ref.current.classList.toggle('vis', window.scrollY > 400); };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return <button ref={ref} className="b2t" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>;
}
