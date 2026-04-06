import { useState, useEffect, useRef } from 'react';

/* ── Intersection-observer reveal hook ── */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

/* ── Typewriter hook ── */
export function useTypewriter(phrases, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting) {
      // Typing forward
      if (charIndex < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplay(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        // Finished typing, pause then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplay(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed / 2);
      } else {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases, speed, pause]);

  return display;
}

/* ── Animated counter hook ── */
export function useCounter(target) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const isFloat = String(target).includes('.');
        const end = parseFloat(target);
        let cur = 0;
        const inc = end / (1800 / 16);
        const timer = setInterval(() => {
          cur += inc;
          if (cur >= end) { setVal(isFloat ? end.toFixed(1) : end); clearInterval(timer); }
          else setVal(isFloat ? cur.toFixed(1) : Math.floor(cur));
        }, 16);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return [val, ref];
}

