import { useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext.jsx';

// Fullscreen overlay that embeds a PDF report in an iframe, with download +
// open-in-new-tab actions. Closes on backdrop click or Escape.
export default function PdfModal({ open, url, title, onClose }) {
  const { lang } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const L = {
    en: { report: 'Report', download: 'Download', openTab: 'Open in new tab', close: 'Close' },
    fr: { report: 'Rapport', download: 'Télécharger', openTab: 'Ouvrir dans un onglet', close: 'Fermer' },
  }[lang];

  return (
    <div className="pdf-overlay" onMouseDown={onClose}>
      <div className="pdf-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="pdf-bar">
          <span className="pdf-title"><span className="prompt">$</span> {L.report} — {title}</span>
          <div className="pdf-actions">
            <a className="btn" href={url} download>{L.download}</a>
            <a className="btn" href={url} target="_blank" rel="noopener noreferrer">{L.openTab}</a>
            <button className="btn primary" onClick={onClose} aria-label={L.close}>✕</button>
          </div>
        </div>
        <iframe className="pdf-frame" src={`${url}#view=FitH`} title={title} />
      </div>
    </div>
  );
}
