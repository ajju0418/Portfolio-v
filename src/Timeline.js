import { useEffect, useRef } from 'react';
import { useReveal } from './hooks';
import cognizantLogo from './assets/cognizant-logo.png';

// Combined timeline data - sorted by date (newest first)
const TIMELINE = [
  {
    icon: null,
    type: 'experience',
    role: 'Programmer Analyst Trainee',
    company: 'Cognizant Technology Solutions',
    location: 'Chennai, India',
    date: 'Oct 2025 – Present',
    points: [
      'Working on the Bayer Project: authentication & authorization in a publishing platform.',
      'Secure backend development, testing, and code reviews in an Agile environment.',
      'Java & Spring Boot following secure coding practices.',
    ],
    tags: ['Java', 'Spring Boot', 'Agile', 'Security'],
  },
  {
    icon: null,
    type: 'experience',
    role: 'Java Full Stack Intern',
    company: 'Cognizant Technology Solutions',
    location: 'Chennai, India',
    date: 'July 2025 – Sept 2025',
    points: [
      'Backend microservices with Java & Spring Boot; frontend with Angular.',
      'RESTful APIs for book management, member workflows, and fine calculation.',
      'Spring Security: Authentication, Authorization, RBAC.',
      'Agile/Scrum: sprint planning, stand-ups, iterative delivery.',
    ],
    tags: ['Java', 'Spring Boot', 'Angular', 'REST API', 'Microservices', 'Spring Security'],
  },
  {
    icon: '🎓',
    type: 'education',
    role: 'B.Tech — Computer Science and Business Systems',
    company: 'Sri Krishna College of Engineering and Technology',
    location: 'Coimbatore',
    date: 'Nov 2021 – April 2025',
    points: ['CGPA: 8.8'],
    tags: ['Java', 'Full Stack', 'Computer Science'],
  },
  {
    icon: '🏫',
    type: 'education',
    role: 'Higher Secondary (12th)',
    company: 'Sri Vetri Vikas Matric Higher Secondary School',
    location: 'Dharmapuri',
    date: 'Jun 2020 – April 2021',
    points: ['Percentage: 94.3%'],
    tags: ['Science', 'Mathematics'],
  },
];

function TLCard({ item, idx, dir }) {
  const ref = useReveal(0.18);

  return (
    <div className="tl-item">
      <div className={`tl-card ${dir === 'l' ? 'reveal-l' : 'reveal-r'}`} ref={ref} style={{ transitionDelay: `${idx * 0.15}s` }}>
        <div className="tl-type-badge" data-type={item.type}>
          {item.type === 'experience' ? '💼 Experience' : '🎓 Education'}
        </div>
        <div className="tl-icon">
          {item.icon === null
            ? <img src={cognizantLogo} alt="Cognizant" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            : item.icon}
        </div>
        <div className="tl-role">{item.role}</div>
        <div className="tl-co">{item.company} · {item.location}</div>
        <div className="tl-date">{item.date}</div>
        <ul className="tl-pts">
          {item.points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
        <div className="tags">
          {item.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
      <div className="tl-dot" data-type={item.type} />
    </div>
  );
}

export default function Timeline() {
  const lineRef = useRef(null);
  const wrapRef = useRef(null);
  const hdRef = useReveal();

  useEffect(() => {
    const update = () => {
      if (!lineRef.current || !wrapRef.current) return;
      const top = wrapRef.current.getBoundingClientRect().top + window.scrollY;
      const h = wrapRef.current.offsetHeight;
      const progress = Math.min(Math.max((window.scrollY + window.innerHeight - top) / (h + window.innerHeight), 0), 1);
      lineRef.current.style.height = `${progress * 100}%`;
    };
    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <section className="sec" id="experience">
      <div className="sec-hd reveal" ref={hdRef}>
        <span className="sec-num">04 —</span>
        <h2 className="sec-title">Experience &amp; <span>Education</span></h2>
        <div className="sec-line" />
      </div>
      <div className="tl-wrap" ref={wrapRef}>
        <div className="tl-line" ref={lineRef} style={{ height: '0%' }} />
        <div className="tl-items">
          {TIMELINE.map((item, i) => (
            <TLCard key={i} item={item} idx={i} dir={i % 2 === 0 ? 'l' : 'r'} />
          ))}
        </div>
      </div>
    </section>
  );
}
