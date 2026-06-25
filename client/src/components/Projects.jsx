import Reveal from './Reveal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';
import { onCardMove, onCardLeave } from '../utils/cardFx.js';

export default function Projects({ projects }) {
  const { t, pick } = useLang();

  return (
    <Reveal>
      <section id="projects" className="block">
        <h2><span className="hash">#</span> {t.headings.projects}</h2>
        <div className="proj-grid">
          {projects.map((p) => {
            const inner = (
              <>
                <div className="proj-top">
                  <span className="tag">{pick(p.tag)}</span>
                  <span className="proj-action">{p.repo ? t.projectAction.repo : t.projectAction.report}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{pick(p.blurb)}</p>
                <div className="stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </>
            );

            // Repo projects link out; report-only projects open the in-site reader page.
            const href = p.repo || `#/report/${p.slug}`;
            const external = Boolean(p.repo);

            return (
              <a
                className="proj"
                key={p.slug}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onMouseMove={onCardMove}
                onMouseLeave={onCardLeave}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
