import { useState } from 'react';
import { useReveal } from './hooks';

const GH_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const hdRef = useReveal();
  const lRef = useReveal();
  const rRef = useReveal();

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 2000);
  };

  return (
    <section className="sec-full contact-bg" id="contact">
      <div className="sec" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="sec-hd reveal" ref={hdRef}>
          <span className="sec-num">08 —</span>
          <h2 className="sec-title">Contact <span>Me</span></h2>
          <div className="sec-line" />
        </div>
        <div className="contact-g">
          {/* LEFT */}
          <div className="reveal-l" ref={lRef}>
            <p className="contact-tag">"Have an opportunity or just want to say hi? My inbox is always open."</p>
            <div className="c-links">
              <a className="c-link" href="mailto:varshiniashok03@gmail.com">
                <div className="c-ico">✉️</div>
                <div className="c-info"><strong>Email</strong><span>varshiniashok03@gmail.com</span></div>
              </a>
              <a className="c-link" href="https://www.linkedin.com/in/varshini-a-a8214a227" target="_blank" rel="noopener noreferrer">
                <div className="c-ico">💼</div>
                <div className="c-info"><strong>LinkedIn</strong><span>varshini-a-a8214a227</span></div>
              </a>
              <a className="c-link" href="https://github.com/varshini057" target="_blank" rel="noopener noreferrer">
                <div className="c-ico">{GH_ICON}</div>
                <div className="c-info"><strong>GitHub</strong><span>varshini057</span></div>
              </a>
              <div className="c-link" style={{ cursor: 'default' }}>
                <div className="c-ico">📞</div>
                <div className="c-info"><strong>Phone</strong><span>+91 6379996430</span></div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="reveal-r" ref={rRef}>
            <div className="c-form-offset" />
            {sent ? (
              <div className="f-ok">
                <div className="f-ok-ico">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="c-form" onSubmit={onSubmit}>
                <div className="fg">
                  <label className="flbl" htmlFor="name">Name</label>
                  <input className="finp" id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={onChange} required />
                </div>
                <div className="fg">
                  <label className="flbl" htmlFor="email">Email</label>
                  <input className="finp" id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={onChange} required />
                </div>
                <div className="fg">
                  <label className="flbl" htmlFor="message">Message</label>
                  <textarea className="finp" id="message" name="message" rows={6} placeholder="Tell me about the opportunity..." value={form.message} onChange={onChange} required />
                </div>
                <button type="submit" className="fsub" disabled={sending}>
                  {sending ? <><div className="spin" /> Sending...</> : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

