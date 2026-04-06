import { useReveal } from './hooks';

const CERT = {
  icon: '🏆',
  title: 'GitHub Foundations',
  badge: 'GH-900',
  issuer: 'GitHub',
  date: '2024',
  desc: 'Certified in GitHub fundamentals including repositories, branches, commits, and pull requests. Demonstrated proficiency in collaboration workflows and GitHub features.',
  link: 'https://github.com/varshini057',
};

const HACKATHONS = [
  {
    icon: '🗺️',
    mode: 'Offline · 48hrs',
    result: 'Participant',
    event: 'TN Smart City Hackathon 2025',
    venue: 'IIT Madras Research Park, Chennai',
    team: 'Tech Kuruvigal',
    theme: 'Urban Tech & Sustainability',
    project: 'Kuppai-Connect',
    projectSub: 'Smart Waste Route Optimizer',
    role: 'Built the interactive map dashboard with dynamic shortest-route generation using mock GPS bin data.',
    stack: ['React.js', 'Mapbox API'],
  },
  {
    icon: '💸',
    mode: 'Online · 36hrs',
    result: 'Top 20 Finalist',
    event: 'Global FinTech Virtual Challenge 2025',
    venue: 'Global Web3 & FinTech Virtual Challenge',
    team: 'ByteCrafters',
    theme: 'Financial Inclusion',
    project: 'MicroFundr',
    projectSub: 'Peer-to-Peer Micro-Lending Platform',
    role: 'Led UI/UX design in Figma and translated it into a fully responsive frontend with secure authentication.',
    stack: ['React', 'Tailwind CSS', 'Firebase', 'Figma'],
  },
  {
    icon: '♿',
    mode: 'Online · 24hrs',
    result: 'Participant',
    event: 'Code for Good Virtual Hack 2026',
    venue: 'Code for Good',
    team: 'Agile Avengers',
    theme: 'EdTech & Accessibility',
    project: 'Padippu.io',
    projectSub: 'Accessibility-First EdTech Aggregator',
    role: 'Engineered custom WCAG-compliant React components with screen-reader optimization and Redux state management.',
    stack: ['React', 'Redux', 'WCAG'],
  },
];

function CgpaCard() {
  const ref = useReveal(0.15);
  return (
    <div className="ach-card cgpa-card reveal" ref={ref}>
      <div className="cgpa-glow-orb" />
      <div className="cgpa-header">
        <div className="cgpa-header-left">
          <span className="cgpa-pill">B.Tech · 2022 – 2026</span>
          <h3 className="cgpa-degree">Computer Science<br /><span>&amp; Business Systems</span></h3>
          <p className="cgpa-inst">Sri Krishna College of Engineering &amp; Technology</p>
        </div>
        <div className="cgpa-score-block">
          <span className="cgpa-score">8.8</span>
          <span className="cgpa-score-label">CGPA</span>
        </div>
      </div>
      <div className="cgpa-divider" />
      <div className="cgpa-stats">
        <div className="cgpa-stat">
          <span className="cgpa-stat-val">Top 10%</span>
          <span className="cgpa-stat-key">Class Rank</span>
        </div>
        <div className="cgpa-stat-sep" />
        <div className="cgpa-stat">
          <span className="cgpa-stat-val">4 Yrs</span>
          <span className="cgpa-stat-key">Duration</span>
        </div>
        <div className="cgpa-stat-sep" />
        <div className="cgpa-stat">
          <span className="cgpa-stat-val">Distinction</span>
          <span className="cgpa-stat-key">Honours</span>
        </div>
      </div>
      <div className="cgpa-bar-wrap">
        <div className="cgpa-bar-track">
          <div className="cgpa-bar-fill" style={{ width: '88%' }} />
        </div>
        <span className="cgpa-bar-pct">88%</span>
      </div>
    </div>
  );
}

function CertCard() {
  const ref = useReveal(0.15);
  const ach = CERT;
  return (
    <div className="ach-card reveal" ref={ref}>
      <div className="ach-badge">{ach.badge}</div>
      <div className="ach-icon">{ach.icon}</div>
      <h3 className="ach-title">{ach.title}</h3>
      <p className="ach-issuer">Issued by {ach.issuer}</p>
      <p className="ach-date">{ach.date}</p>
      <p className="ach-desc">{ach.desc}</p>
      <a className="ach-link" href={ach.link} target="_blank" rel="noopener noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        View Credential
      </a>
    </div>
  );
}

function HackCard({ h, idx }) {
  const ref = useReveal(0.15);
  return (
    <div className="ach-card hack-card reveal" ref={ref} style={{ transitionDelay: `${(idx + 1) * 0.1}s` }}>
      <div className="ach-badge hack-badge">{h.result}</div>
      <div className="hack-top">
        <span className="hack-icon">{h.icon}</span>
        <span className="hack-mode">{h.mode}</span>
      </div>
      <h3 className="hack-project">{h.project}</h3>
      <p className="hack-project-sub">{h.projectSub}</p>
      <p className="hack-event">{h.event}</p>
      <div className="hack-meta">
        <span>👥 {h.team}</span>
        <span>🎯 {h.theme}</span>
      </div>
      <p className="hack-role">{h.role}</p>
      <div className="tags" style={{ marginTop: '1rem' }}>
        {h.stack.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Achievements() {
  const hdRef = useReveal();

  return (
    <section className="sec" id="achievements">
      <div className="sec-hd reveal" ref={hdRef}>
        <span className="sec-num">06 —</span>
        <h2 className="sec-title">Achievements & <span>Certifications</span></h2>
        <div className="sec-line" />
      </div>
      <div className="ach-grid">
        <CgpaCard />
        <CertCard />
        {HACKATHONS.map((h, i) => <HackCard key={h.event} h={h} idx={i} />)}
      </div>
    </section>
  );
}

