import { useState, useEffect } from 'react';
import GlobalStyles from './styles';
import { PageLoader, BackToTop } from './ui';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Timeline from './Timeline';
import TechStack from './TechStack';
import Achievements from './Achievements';
import Projects from './Projects';
import Contact from './Contact';

/* ── Active section tracker ── */
function useActiveSection() {
  const [active, setActive] = useState('home');
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  return active;
}

function Footer() {
  return (
    <footer className="footer">
      Designed &amp; Built with <span className="hrt">♥</span> by <span>Varshini A</span> · © {new Date().getFullYear()}
    </footer>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="noise" />
      <PageLoader done={loaded} />
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Timeline />
        <TechStack />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

