import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';
import { reports } from '../data/reports.js';

// Themed, in-site reader for a project report (rewritten content, same design).
export default function ReportPage({ slug }) {
  const { t, pick } = useLang();
  const report = reports[slug];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const goBack = (e) => {
    e.preventDefault();
    window.location.hash = '#blog';
  };

  if (!report) {
    return (
      <main className="report-page">
        <a className="report-back" href="#blog" onClick={goBack}>‹ {t.report.back}</a>
        <p className="lead" style={{ marginTop: '2rem' }}>{t.report.notFound}</p>
      </main>
    );
  }

  return (
    <main className="report-page">
      <a className="report-back" href="#blog" onClick={goBack}>‹ {t.report.back}</a>

      <header className="report-head">
        <div className="report-meta">
          <span className="post-type">{t.blog.pdf}</span>
          <span className="post-date">{report.date}</span>
          <span className="tag">{pick(report.tag)}</span>
        </div>
        <h1>{report.title}</h1>
        {report.subtitle && <p className="report-subtitle">{pick(report.subtitle)}</p>}
        {report.intro && <p className="report-intro">{pick(report.intro)}</p>}

        {report.stack && (
          <div className="stack report-stack">
            {report.stack.map((s) => <span key={s}>{s}</span>)}
          </div>
        )}

        <div className="report-actions">
          <a className="btn primary" href={report.pdf} download>{t.report.download}</a>
          <a className="btn" href={report.pdf} target="_blank" rel="noopener noreferrer">{t.report.original}</a>
        </div>
      </header>

      <article className="report-body">
        {report.sections.map((sec, i) => (
          <section className="report-section" key={i}>
            <h2><span className="hash">#</span> {pick(sec.h)}</h2>
            {sec.paras && sec.paras.map((p, j) => <p key={j}>{pick(p)}</p>)}
            {sec.bullets && (
              <ul className="report-list">
                {pick(sec.bullets).map((b, k) => <li key={k}>{b}</li>)}
              </ul>
            )}
          </section>
        ))}
      </article>

      <footer className="report-foot">
        <a className="report-back" href="#blog" onClick={goBack}>‹ {t.report.back}</a>
      </footer>
    </main>
  );
}
