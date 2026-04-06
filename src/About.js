import { useReveal, useCounter } from './hooks';
import profileImg from './assets/profile.jpg';

const COUNTERS = [
  { target: 2, label: 'Internships' },
  { target: 2, label: 'Projects Built' },
  { target: 8.8, label: 'CGPA' },
  { target: 1, label: 'Certification' },
];

function Counter({ target, label }) {
  const [val, ref] = useCounter(target);
  return (
    <div className="ctr">
      <div className="ctr-n" ref={ref}>{val}</div>
      <div className="ctr-l">{label}</div>
    </div>
  );
}

export default function About() {
  const hdRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();
  return (
    <section className="sec" id="about">
      <div className="sec-hd reveal" ref={hdRef}>
        <span className="sec-num">02 —</span>
        <h2 className="sec-title">About <span>Me</span></h2>
        <div className="sec-line" />
      </div>
      <div className="about-g">
        <div className="reveal-l" ref={leftRef} style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="avatar">
            <img src={profileImg} alt="Varshini" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
          </div>
        </div>
        <div className="reveal-r" ref={rightRef}>
          <p className="bio">
            I'm Varshini, a Software Developer based in Chennai with expertise in Java, Spring Boot, Angular, and full-stack development.
            I specialize in building scalable, secure applications with clean architecture. Currently working at Cognizant Technology Solutions
            as a Programmer Analyst Trainee.
          </p>
          <blockquote className="quote-blk">
            "My objective is to leverage my technical skills in Java, Spring Boot, and Angular to develop robust,
            enterprise-grade applications — contributing to meaningful projects while continuously growing as an engineer."
          </blockquote>
          <div className="counters">
            {COUNTERS.map(c => <Counter key={c.label} target={c.target} label={c.label} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

