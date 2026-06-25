import Reveal from './Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { onCardMove, onCardLeave } from '../utils/cardFx.js';

export default function Skills({ skills }) {
  const { t, pick } = useLang();
  return (
    <Reveal>
      <section id="skills" className="block">
        <h2><span className="hash">#</span> {t.headings.skills}</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-card" key={pick(s.domain)} onMouseMove={onCardMove} onMouseLeave={onCardLeave}>
              <h3>{pick(s.domain)}</h3>
              <p>{pick(s.items).join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
