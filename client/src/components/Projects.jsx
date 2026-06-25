import { useState } from 'react';
import Reveal from './Reveal.jsx';
import PdfModal from './PdfModal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Projects({ projects }) {
  const { t, pick } = useLang();
  const [report, setReport] = useState(null); // { url, title } or null

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

            // Link to the repo when available; otherwise open the PDF reader.
            if (p.report && !p.repo) {
              return (
                <div
                  className="proj"
                  key={p.slug}
                  role="button"
                  tabIndex={0}
                  onClick={() => setReport({ url: p.report, title: p.title })}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setReport({ url: p.report, title: p.title })}
                >
                  {inner}
                </div>
              );
            }
            return (
              <a className="proj" key={p.slug} href={p.repo} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            );
          })}
        </div>
      </section>

      <PdfModal
        open={!!report}
        url={report?.url}
        title={report?.title}
        onClose={() => setReport(null)}
      />
    </Reveal>
  );
}
