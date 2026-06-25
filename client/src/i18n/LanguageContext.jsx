import { createContext, useContext, useEffect, useState } from 'react';
import { UI } from './ui.js';

const LanguageContext = createContext(null);

function detectInitial() {
  const saved = typeof localStorage !== 'undefined' && localStorage.getItem('lang');
  if (saved === 'en' || saved === 'fr') return saved;
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
  return nav && nav.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === 'en' ? 'fr' : 'en'));

  // Resolve a possibly-bilingual value: {en,fr} -> the current locale; else as-is.
  const pick = (val) => {
    if (val && typeof val === 'object' && !Array.isArray(val) && ('en' in val || 'fr' in val)) {
      return val[lang] ?? val.en ?? val.fr;
    }
    return val;
  };

  const t = UI[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
