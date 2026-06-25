import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';

const sections = ['about', 'skills', 'projects', 'blog', 'experience', 'contact'];

// Left: scroll-spy dots that jump between sections. Right: vertical email.
// Text/shape only — no icon glyphs. Hidden on narrow screens.
export default function SideRails({ profile }) {
  const { t } = useLang();
  const [active, setActive] = useState('about');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <nav className="rail left" aria-label="Section navigation">
        <ul>
          {sections.map((id) => (
            <li key={id}>
              <button
                className={`dot-nav ${active === id ? 'active' : ''}`}
                onClick={() => go(id)}
                aria-label={t.nav[id]}
              >
                <span className="dot-label">{t.nav[id]}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rail right">
        <a className="email-vert" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </>
  );
}
