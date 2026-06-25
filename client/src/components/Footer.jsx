import { useLang } from '../i18n/LanguageContext.jsx';

export default function Footer({ profile }) {
  const { t } = useLang();
  return (
    <footer>
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="built">{t.footer}</span>
      <span className="blink">$ exit_</span>
    </footer>
  );
}
