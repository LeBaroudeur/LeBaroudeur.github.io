import { useLang } from '../i18n/LanguageContext.jsx';

const keys = ['about', 'skills', 'projects', 'blog', 'experience', 'contact'];

export default function Navbar({ live }) {
  const { t, lang, toggle } = useLang();
  return (
    <header className="topbar">
      <span className="brand">~/mehdi-msallem</span>
      <nav>
        {keys.map((k) => (
          <a key={k} href={`#${k}`}>{t.nav[k]}</a>
        ))}
        <span className={`api-dot ${live ? 'on' : 'off'}`} title={live ? 'Connected to Express API' : 'Static fallback data'}>
          {live ? t.api.live : t.api.offline}
        </span>
        <button className="lang-toggle" onClick={toggle} title={t.langTitle} aria-label={t.langTitle}>
          <span className={lang === 'en' ? 'active' : ''}>EN</span>
          <span className="sep">/</span>
          <span className={lang === 'fr' ? 'active' : ''}>FR</span>
        </button>
      </nav>
    </header>
  );
}
