import { useEffect, useState } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import PdfModal from './PdfModal.jsx';

// Typewriter cycling through the role lines.
function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (!words || !words.length) return;
    setText('');
    let w = 0, c = 0, deleting = false, timer;
    const tick = () => {
      const word = words[w];
      setText(deleting ? word.slice(0, c--) : word.slice(0, c++));
      let delay = deleting ? 35 : speed;
      if (!deleting && c === word.length + 1) { deleting = true; delay = pause; }
      else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [words, speed, pause]);
  return text;
}

export default function Hero({ profile }) {
  const { t, pick } = useLang();
  const roles = pick(profile.roles);
  const typed = useTypewriter(roles);
  const [cvOpen, setCvOpen] = useState(false);

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="term">
        <div className="term-bar">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <span className="term-title">mehdi@telecom-paris: ~</span>
        </div>
        <div className="term-body">
          <p><span className="prompt">$</span> whoami</p>
          <h1>{profile.name}</h1>
          <p className="role"><span className="prompt">$</span> cat role.txt</p>
          <p className="typed"><span>{typed}</span><span className="cursor">▋</span></p>
          <p className="meta"><span className="prompt">$</span> {t.hero.availabilityCmd}</p>
          <p className="status">{pick(profile.availability)}</p>
          <div className="cta">
            <a className="btn primary" href="#contact" onClick={scrollToContact}>{t.hero.getInTouch}</a>
            {profile.cv && (
              <button className="btn" type="button" onClick={() => setCvOpen(true)}>{t.hero.cv}</button>
            )}
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="certs">
        {profile.certifications.map((c) => <span className="chip" key={c}>{c}</span>)}
      </div>

      {profile.cv && (
        <PdfModal open={cvOpen} url={profile.cv} title={`CV — ${profile.name}`} label="" onClose={() => setCvOpen(false)} />
      )}
    </section>
  );
}
