import { ParticleCanvas } from './ui';
import { useTypewriter } from './hooks';

const PHRASES = ['Software Developer', 'Java & Spring Boot Engineer', 'Angular Full Stack Developer', 'Problem Solver'];

export default function Hero() {
  const typed = useTypewriter(PHRASES);
  return (
    <section className="hero" id="home">
      <ParticleCanvas />
      <div className="hero-content">
        <p className="hero-lbl">{"// in Chennai, India"}</p>
        <h1 className="hero-name">Varshini A</h1>
        <div className="hero-tw">
          {typed}<span className="tw-cur" />
        </div>
        <p className="hero-tag">Building scalable, secure, and elegant full-stack applications.</p>
        <div className="hero-status">
          <span className="status-dot"></span>
          Currently working at <strong>Cognizant Technology Solutions</strong>
        </div>
        <div className="hero-ctas">
          <button className="btn-p" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            <span>View My Work</span>
          </button>
          <button className="btn-o" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </div>
      </div>
      <div className="scroll-ind">
        <div className="s-mouse" />
        <span className="s-txt">Scroll</span>
      </div>
    </section>
  );
}

