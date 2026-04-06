import { useState, useEffect } from 'react';

const LINKS = ['Home', 'About', 'Experience', 'Tech Stack', 'Achievements', 'Projects', 'Contact'];

const scrollTo = id => {
  const el = document.getElementById(id.toLowerCase().replace(/\s+/g, '-'));
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar({ active }) {
  const [sc, setSc] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setSc(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <nav className={`nav${sc ? ' sc' : ''}`}>
        <div className="nav-logo" onClick={() => scrollTo('home')}><span className="logo-text">VA</span><span className="dot">.</span></div>
        <ul className="nav-ul">
          {LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className={active === l.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}
                onClick={e => { e.preventDefault(); scrollTo(l); }}
              >{l}</a>
            </li>
          ))}
        </ul>
        <button className={`ham${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`drawer${open ? ' open' : ''}`}>
        <ul>
          {LINKS.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={e => { e.preventDefault(); scrollTo(l); setOpen(false); }}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

