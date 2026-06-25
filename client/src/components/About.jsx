import Reveal from './Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function About({ profile }) {
  const { t, pick } = useLang();
  return (
    <Reveal>
      <section id="about" className="block">
        <h2><span className="hash">#</span> {t.headings.about}</h2>
        <p className="lead">{pick(profile.about)}</p>
        <div className="langs">
          {pick(profile.languages).map((l) => <span key={l}>{l}</span>)}
        </div>
      </section>
    </Reveal>
  );
}
