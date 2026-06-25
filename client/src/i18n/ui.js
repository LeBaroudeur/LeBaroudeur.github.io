// Static UI strings per locale. Portfolio *content* (projects, experience…)
// is bilingual in the data files; these are the chrome/labels.
export const UI = {
  en: {
    nav: { about: 'about', skills: 'skills', projects: 'projects', blog: 'blog', experience: 'experience', contact: 'contact' },
    headings: { about: 'about', skills: 'arsenal', projects: 'featured_projects', blog: 'reports', experience: 'experience', contact: 'contact' },
    projectAction: { report: 'Read report ▸', repo: 'View code ↗' },
    blog: { subtitle: 'Technical reports & write-ups — read in your browser or download the PDF.', read: 'Read', download: 'Download', pdf: 'PDF' },
    hero: { getInTouch: 'Get in touch', availabilityCmd: './status --availability' },
    contact: {
      lead: "Let's talk — I'm looking for a 6-month cybersecurity internship starting July 2026.",
      name: 'Your name', email: 'Your email', message: 'Your message',
      send: 'Send message', sending: 'Sending…',
      okStored: 'Message saved — I will get back to you soon.',
      okDemo: 'Message received (demo mode — not persisted).',
      okMailto: 'Opening your email app to send the message…',
    },
    education: 'education.txt',
    footer: 'Built with the MERN stack — MongoDB · Express · React · Node',
    api: { live: 'API: live', offline: 'API: offline' },
    langButton: 'FR',
    langTitle: 'Passer en français',
  },
  fr: {
    nav: { about: 'à propos', skills: 'compétences', projects: 'projets', blog: 'blog', experience: 'expérience', contact: 'contact' },
    headings: { about: 'à_propos', skills: 'arsenal', projects: 'projets', blog: 'rapports', experience: 'expérience', contact: 'contact' },
    projectAction: { report: 'Lire le rapport ▸', repo: 'Voir le code ↗' },
    blog: { subtitle: 'Rapports techniques & write-ups — à lire dans le navigateur ou à télécharger en PDF.', read: 'Lire', download: 'Télécharger', pdf: 'PDF' },
    hero: { getInTouch: 'Me contacter', availabilityCmd: './statut --disponibilite' },
    contact: {
      lead: 'Discutons — je recherche un stage de 6 mois en cybersécurité à partir de juillet 2026.',
      name: 'Votre nom', email: 'Votre email', message: 'Votre message',
      send: 'Envoyer', sending: 'Envoi…',
      okStored: 'Message enregistré — je vous recontacte rapidement.',
      okDemo: 'Message reçu (mode démo — non enregistré).',
      okMailto: 'Ouverture de votre messagerie pour envoyer le message…',
    },
    education: 'education.txt',
    footer: 'Développé avec la stack MERN — MongoDB · Express · React · Node',
    api: { live: 'API : en ligne', offline: 'API : hors ligne' },
    langButton: 'EN',
    langTitle: 'Switch to English',
  },
};
