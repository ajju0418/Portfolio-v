import { useEffect, useRef } from 'react';
import { useReveal } from './hooks';
import cognizantLogo from './assets/cognizant-logo.png';

const EDU_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const SCHOOL_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19v-4.83a2 2 0 0 1 1.17-1.83l5.5-2.75c.5-.25 1.16-.25 1.66 0l5.5 2.75A2 2 0 0 1 19 14.17V19" />
    <path d="M12 22v-9" />
    <path d="M4 22h16" />
    <path d="M12 2v6" />
    <path d="M9 5l3-3 3 3" />
  </svg>
);

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
    icon: 'college',
    type: 'education',
    role: 'B.Tech — Computer Science & Business Systems',
    company: 'Sri Krishna College of Engineering and Technology',
    location: 'Coimbatore',
    date: 'Nov 2021 – April 2025',
    score: '8.8 CGPA',
    points: [
      'Coursework: Data Structures, Algorithms, DBMS, Software Engineering, Operating Systems.',
      'Developed multiple full-stack projects and actively participated in hackathons.'
    ],
    tags: ['Computer Science', 'Data Structures', 'DBMS'],
  },
  {
    icon: 'school',
    type: 'education',
    role: 'Higher Secondary (12th Grade)',
    company: 'Sri Vetri Vikas Matric Higher Secondary School',
    location: 'Dharmapuri',
    date: 'Jun 2019 – April 2021',
    score: '94.3%',
    points: [
      'Stream: Biology & Mathematics (Bio-Maths).',
      'Consistently ranked among the top students in the class.'
    ],
    tags: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
  },
];

function TLCard({ item, idx, dir }) {
  const ref = useReveal(0.18);

  let renderedIcon;
  if (item.type === 'experience') {
    renderedIcon = <img src={cognizantLogo} alt="Cognizant" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />;
  } else if (item.icon === 'college') {
    renderedIcon = <div className="edu-icon-wrap">{EDU_ICON}</div>;
  } else if (item.icon === 'school') {
    renderedIcon = <div className="edu-icon-wrap">{SCHOOL_ICON}</div>;
  } else {
    renderedIcon = item.icon;
  }

  return (
    <div className="tl-item">
      <div className={`tl-card ${dir === 'l' ? 'reveal-l' : 'reveal-r'}`} data-type={item.type} ref={ref} style={{ transitionDelay: `${idx * 0.15}s` }}>
        <div className="tl-type-badge" data-type={item.type}>
          {item.type === 'experience' ? 'Experience' : 'Education'}
        </div>
        <div className="tl-icon">
          {renderedIcon}
        </div>
        <div className="tl-role">{item.role}</div>
        <div className="tl-co">{item.company} · {item.location}</div>
        <div className="tl-date-wrap">
          <div className="tl-date">{item.date}</div>
          {item.score && <div className="tl-edu-score">{item.score}</div>}
        </div>
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
    let rafId;
    const update = () => {
      if (!lineRef.current || !wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;
      const progress = (triggerPoint - rect.top) / rect.height;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      lineRef.current.style.height = `${clampedProgress * 100}%`;
    };
    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
