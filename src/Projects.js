import { useEffect, useRef, useState } from 'react';
import { useReveal } from './hooks';

const PROJECTS = [
  {
    icon: '📚', title: 'Bookify', sub: 'Library Management System',
    desc: 'Full-stack application using Angular (frontend) and Spring Boot (backend) with microservices architecture. RESTful APIs for book management, member services, issue/return workflows, and fine calculation. Spring Security for authentication, authorization, and RBAC.',
    tags: ['Angular', 'Spring Boot', 'Microservices', 'REST API', 'Spring Security', 'Java'],
    featured: true,
    github: 'https://github.com/varshini057',
    image: [
      '/Assets/Bookify.png',
      '/Assets/Bookify login page.png'
    ],
  },
  {
    icon: '🎓', title: 'Reconnect', sub: 'Supporting Dropout Students',
    desc: 'Platform connecting school and college dropouts with NGOs, mentors, and job opportunities. User-friendly interface enabling resource sharing and community support.',
    tags: ['HTML', 'CSS', 'MySQL', 'Community Platform'],
    featured: false,
    github: 'https://github.com/varshini057',
    image: null, // Add your image path here: '/images/reconnect.png'
  },
];

const GH_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IMAGE_PLACEHOLDER = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
  </svg>
);

function ProjectCard({ p, idx }) {
  const ref = useRef(null);
  const [imgIdx, setImgIdx] = useState(0);
  const imgs = Array.isArray(p.image) ? p.image : (p.image ? [p.image] : []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.15 });
    obs.observe(el);

    const onMove = e => {
      const rc = el.getBoundingClientRect();
      const x = ((e.clientX - rc.left) / rc.width) * 100;
      const y = ((e.clientY - rc.top) / rc.height) * 100;
      el.style.setProperty('--mx', `${x}%`);
      el.style.setProperty('--my', `${y}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => {
      obs.disconnect();
      el.removeEventListener('mousemove', onMove);
    };
  }, []);

  // Slideshow effect: change image every 3 seconds when multiple images exist
  useEffect(() => {
    if (imgs.length <= 1) return undefined;
    const iv = setInterval(() => setImgIdx(i => (i + 1) % imgs.length), 3000);
    return () => clearInterval(iv);
  }, [p.image]);

  // helper: try alternate public path when an image fails to load
  const handleImgError = (e, src) => {
    const el = e.currentTarget;
    if (el.dataset.fallback) return (el.style.display = 'none');
    el.dataset.fallback = '1';
    // try serving from public folder (works if you place Assets folder inside public/)
    const alt = src.startsWith('/') ? src : '/' + src;
    el.src = (process.env.PUBLIC_URL || '') + alt;
  };

  return (
    <div className="proj reveal" ref={ref} style={{ transitionDelay: `${idx * 0.15}s` }}>
      {/* Featured star overlay */}
      {p.featured && <div className="feat-star">★</div>}

      {/* Left side - Content */}
      <div className="proj-content">
        <div className="proj-ico">{p.icon}</div>
        <h3 className="proj-title">{p.title}</h3>
        <p className="proj-sub">{p.sub}</p>
        <div className="proj-desc-wrap">
          <p className="proj-desc">{p.desc}</p>
          <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
          <a className="btn-gh" href={p.github} target="_blank" rel="noopener noreferrer">
            {GH_ICON} GitHub
          </a>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="proj-img">
        {imgs.length ? (
          <>
            <div className="proj-img-frame">
              {imgs.map((s, i) => (
                <img
                  key={i}
                  src={s}
                  className={i === imgIdx ? 'active' : ''}
                  alt={`${p.title} preview ${i + 1}`}
                  onError={(e) => handleImgError(e, s)}
                />
              ))}
            </div>
            {imgs.length > 1 && (
              <div className="proj-img-dots">
                {imgs.map((_, i) => (
                  <span key={i} className={i === imgIdx ? 'active' : ''} />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="proj-img-placeholder">
            {IMAGE_PLACEHOLDER}
            <span>Project Preview</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const hdRef = useReveal();
  return (
    <section className="sec" id="projects">
      <div className="sec-hd reveal" ref={hdRef}>
        <span className="sec-num">07 —</span>
        <h2 className="sec-title">My <span>Projects</span></h2>
        <div className="sec-line" />
      </div>
      <div className="proj-grid">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} idx={i} />)}
      </div>
    </section>
  );
}

