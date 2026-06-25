import Reveal from './Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Experience({ experience, education }) {
  const { t, pick } = useLang();
  return (
    <Reveal>
      <section id="experience" className="block">
        <h2><span className="hash">#</span> {t.headings.experience}</h2>
        <div className="timeline">
          {experience.map((e, i) => (
            <div className="tl-item" key={i}>
              <span className="year">{e.year}</span>
              <div className="tl-body">
                <h3>{pick(e.role)} — <span className="org">{e.org}</span></h3>
                {pick(e.points).map((pt, j) => <p key={j}>{pt}</p>)}
                {pick(e.award) && <p className="award">{pick(e.award)}</p>}
              </div>
            </div>
          ))}
        </div>
        <div className="edu">
          <p><span className="prompt">$</span> cat {t.education}</p>
          {education.map((ed, i) => (
            <p key={i}><strong>{pick(ed.degree)}</strong> — {ed.school} ({ed.period})</p>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
