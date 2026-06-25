import { useState } from 'react';
import Reveal from './Reveal.jsx';
import PdfModal from './PdfModal.jsx';
import { useLang } from '../i18n/LanguageContext.jsx';

// "Blog" of technical reports: every project carrying a PDF `report` becomes a
// readable + downloadable entry.
export default function Blog({ projects }) {
  const { t, pick } = useLang();
  const [open, setOpen] = useState(null); // { url, title } or null

  const posts = projects.filter((p) => p.report);
  if (!posts.length) return null;

  return (
    <Reveal>
      <section id="blog" className="block">
        <h2><span className="hash">#</span> {t.headings.blog}</h2>
        <p className="lead">{t.blog.subtitle}</p>

        <div className="blog-list">
          {posts.map((p) => (
            <article className="post" key={p.slug}>
              <div className="post-main">
                <div className="post-meta">
                  <span className="post-type">{t.blog.pdf}</span>
                  {p.reportDate && <span className="post-date">{p.reportDate}</span>}
                  <span className="tag">{pick(p.tag)}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{pick(p.blurb)}</p>
                <div className="stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
              <div className="post-actions">
                <button className="btn primary" onClick={() => setOpen({ url: p.report, title: p.title })}>
                  {t.blog.read} ▸
                </button>
                <a className="btn" href={p.report} download>{t.blog.download}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PdfModal open={!!open} url={open?.url} title={open?.title} onClose={() => setOpen(null)} />
    </Reveal>
  );
}
