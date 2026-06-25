// Embedded, BILINGUAL fallback content so the UI renders fully even when the
// API/DB is offline. Translatable fields are { en, fr }; the LanguageContext
// resolves them to the active locale at render time.

export const profile = {
  name: 'Mehdi MSALLEM',
  role: { en: 'Cybersecurity Engineer', fr: 'Ingénieur en Cybersécurité' },
  tagline: {
    en: 'MS Cybersecurity & Cyber Defense @ Télécom Paris (Institut Polytechnique de Paris)',
    fr: 'MS Cybersécurité & Cyberdéfense @ Télécom Paris (Institut Polytechnique de Paris)',
  },
  availability: {
    en: 'Open to a 6-month internship (PFE) from July 2026 · France',
    fr: 'Disponible pour un stage de 6 mois (PFE) à partir de juillet 2026 · France',
  },
  about: {
    en:
      'Cybersecurity engineer and MS student at Télécom Paris (Institut Polytechnique de Paris), ' +
      'working at the intersection of offensive security, GRC, and security automation. ' +
      'I also hunt vulnerabilities through bug bounty programs. I break things to understand them, ' +
      'document everything, and automate the rest — from ISMS governance to autonomous red-teaming agents.',
    fr:
      'Ingénieur en cybersécurité et étudiant en MS à Télécom Paris (Institut Polytechnique de Paris), ' +
      'à l’intersection de la sécurité offensive, de la gouvernance (GRC) et de l’automatisation de la sécurité. ' +
      'Je chasse aussi les vulnérabilités via des programmes de bug bounty. Je casse les choses pour les comprendre, ' +
      'je documente tout, et j’automatise le reste — de la gouvernance SMSI aux agents autonomes de red teaming.',
  },
  certifications: ['ISO 27001 Lead Implementer', 'EBIOS RM', 'CEH v13'],
  languages: {
    en: ['French · C1', 'English · C1 (IELTS)', 'German · B1'],
    fr: ['Français · C1', 'Anglais · C1 (IELTS)', 'Allemand · B1'],
  },
  email: 'mehdi.msallem@telecom-paris.fr',
  github: 'https://github.com/LeBaroudeur',
  linkedin: 'https://www.linkedin.com/in/mehdi-msallem',
  cv: '/cv/Mehdi-Msallem-CV.pdf',
  roles: {
    en: [
      'Cybersecurity Engineer',
      'Offensive Security · Red Team',
      'GRC — ISO 27001 · EBIOS RM',
      'Security Automation · SOAR',
      'Bug Bounty Hunter',
      'Full-Stack Developer (MERN)',
    ],
    fr: [
      'Ingénieur en Cybersécurité',
      'Sécurité Offensive · Red Team',
      'GRC — ISO 27001 · EBIOS RM',
      'Automatisation Sécurité · SOAR',
      'Chasseur de Bugs (Bug Bounty)',
      'Développeur Full-Stack (MERN)',
    ],
  },
};

export const skills = [
  {
    domain: { en: 'GRC / Audit', fr: 'Gouvernance / Audit' },
    items: { en: ['ISO 27001 (ISMS)', 'EBIOS RM', 'PSSI', 'Compliance Audits'], fr: ['ISO 27001 (SMSI)', 'EBIOS RM', 'PSSI', 'Audits de conformité'] },
  },
  {
    domain: { en: 'Offensive Security', fr: 'Sécurité Offensive' },
    items: {
      en: ['Pentest Web/Network', 'OWASP Top 10', 'Bug Bounty', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark'],
      fr: ['Pentest Web/Réseau', 'OWASP Top 10', 'Bug Bounty', 'Burp Suite', 'Metasploit', 'Nmap', 'Wireshark'],
    },
  },
  {
    domain: { en: 'Social Engineering', fr: 'Ingénierie Sociale' },
    items: { en: ['Gophish', 'SET', 'Phishing campaigns'], fr: ['Gophish', 'SET', 'Campagnes de phishing'] },
  },
  {
    domain: { en: 'Blue Team / SOAR', fr: 'Blue Team / SOAR' },
    items: { en: ['Wazuh', 'TheHive', 'SIEM/SOAR incident response'], fr: ['Wazuh', 'TheHive', 'Réponse à incident SIEM/SOAR'] },
  },
  {
    domain: { en: 'Development', fr: 'Développement' },
    items: { en: ['Python (automation)', 'C', 'Bash', 'C#', 'JavaScript/React', 'Node.js', 'MongoDB'], fr: ['Python (automatisation)', 'C', 'Bash', 'C#', 'JavaScript/React', 'Node.js', 'MongoDB'] },
  },
  {
    domain: { en: 'Systems', fr: 'Systèmes' },
    items: { en: ['Kali', 'Debian', 'Ubuntu', 'Windows Server', 'Active Directory', 'Docker'], fr: ['Kali', 'Debian', 'Ubuntu', 'Windows Server', 'Active Directory', 'Docker'] },
  },
];

export const projects = [
  {
    title: 'Autonomous LLM Red-Teaming Agent', slug: 'llm-redteam-agent',
    tag: { en: 'AI · Red Team', fr: 'IA · Red Team' },
    blurb: {
      en: 'Autonomous red-teaming agent driven by an LLM, with deterministic control mapped to MITRE ATT&CK.',
      fr: 'Agent autonome de red teaming piloté par un LLM, avec un contrôle déterministe aligné sur MITRE ATT&CK.',
    },
    stack: ['Python', 'LLM', 'MITRE ATT&CK', 'Metasploit'],
    repo: 'https://github.com/LeBaroudeur/cerberus-redteam',
  },
  {
    title: 'Dark Web Threat Intelligence', slug: 'darkweb-cti',
    tag: { en: 'CTI · OSINT', fr: 'CTI · OSINT' },
    blurb: {
      en: 'Automated ethical Dark Web collection, IOC extraction and actionable alert generation for analysts.',
      fr: 'Collecte éthique automatisée sur le Dark Web, extraction d’IOC et génération d’alertes exploitables pour les analystes.',
    },
    stack: ['Python', 'OSINT', 'CTI', 'IOC'],
    repo: 'https://github.com/LeBaroudeur/DarkWebAtlas',
  },
  {
    title: 'Vulnerability Scanner', slug: 'vuln-scanner',
    tag: { en: 'Automation', fr: 'Automatisation' },
    blurb: {
      en: 'Python scanner orchestrating Nmap + Burp Suite APIs to automate asset discovery and audits.',
      fr: 'Scanner Python orchestrant les API Nmap + Burp Suite pour automatiser la découverte d’actifs et les audits.',
    },
    stack: ['Python', 'Nmap', 'Burp Suite'],
    repo: 'https://github.com/LeBaroudeur/React-Strike',
  },
  {
    title: 'Kerberos SSO Hardening', slug: 'kerberos-sso',
    tag: { en: 'Infra · IAM', fr: 'Infra · IAM' },
    blurb: {
      en: 'Secured Single Sign-On on Linux: KDC deployment and kerberization of critical services.',
      fr: 'Environnement Single Sign-On sécurisé sous Linux : déploiement d’un KDC et kerbérisation de services critiques.',
    },
    stack: ['Linux', 'Kerberos', 'KDC', 'SSO'],
    report: '/reports/kerberos.pdf', reportDate: '2026',
  },
  {
    title: 'Predictive Cyber Security Intelligence', slug: 'predictive-cti',
    tag: { en: 'AI · CTI', fr: 'IA · CTI' },
    blurb: {
      en: 'ML models (Random Forest, XGBoost) for predictive threat detection and risk scoring in banking systems, with a Streamlit dashboard and MITRE ATT&CK / TheHive integration.',
      fr: 'Modèles ML (Random Forest, XGBoost) pour la détection prédictive de menaces et le scoring de risque dans les systèmes bancaires, avec un tableau de bord Streamlit et une intégration MITRE ATT&CK / TheHive.',
    },
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit', 'MITRE ATT&CK'],
    report: '/reports/predictive-cti.pdf', reportDate: '2024',
  },
  {
    title: 'MESALIN — Distributed Message Queue', slug: 'mesalin',
    tag: { en: 'Distributed Systems', fr: 'Systèmes Distribués' },
    blurb: {
      en: 'Distributed message-queue system with load balancing, fault tolerance and live monitoring — a Kafka cluster behind HAProxy, observed via Prometheus & Grafana, fully containerized.',
      fr: 'Système de file de messages distribué avec répartition de charge, tolérance aux pannes et supervision temps réel — cluster Kafka derrière HAProxy, observé via Prometheus & Grafana, entièrement conteneurisé.',
    },
    stack: ['Kafka', 'Zookeeper', 'HAProxy', 'Prometheus', 'Grafana', 'Docker'],
    report: '/reports/mesalin.pdf', reportDate: '2023',
    repo: 'https://github.com/LeBaroudeur/Distributed_Message_Queue',
  },
  {
    title: 'ODC Facial-Recognition Attendance', slug: 'odc-attendance',
    tag: { en: 'Full-Stack · AI', fr: 'Full-Stack · IA' },
    blurb: {
      en: 'Facial-recognition attendance platform for Orange Digital Center — React + Node/Express + MySQL, with a Python/OpenCV recognition engine.',
      fr: 'Plateforme de présence par reconnaissance faciale pour l’Orange Digital Center — React + Node/Express + MySQL, avec un moteur de reconnaissance Python/OpenCV.',
    },
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Python', 'OpenCV'],
    report: '/reports/odc-attendance.pdf', reportDate: '2022',
    repo: 'https://github.com/LeBaroudeur/ODC-Facial-Recognition-Attendance-Tracker',
  },
  {
    title: 'This Portfolio (MERN)', slug: 'mern-portfolio',
    tag: { en: 'Full-Stack', fr: 'Full-Stack' },
    blurb: {
      en: 'The site you are looking at — React frontend, Express REST API, MongoDB persistence, with a working contact form and FR/EN i18n.',
      fr: 'Le site que vous consultez — frontend React, API REST Express, persistance MongoDB, avec un formulaire de contact fonctionnel et une internationalisation FR/EN.',
    },
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: 'https://github.com/LeBaroudeur/mern-portfolio',
  },
];

export const experience = [
  {
    year: '2024',
    role: { en: 'Cybersecurity & Automation Engineer (PFE)', fr: 'Ingénieur Cybersécurité & Automatisation (PFE)' },
    org: 'AMEN Bank',
    points: {
      en: ['ISO 27001 governance · SOAR/SIEM (Wazuh, TheHive).', '-40% incident response time, +35% detection accuracy.'],
      fr: ['Gouvernance ISO 27001 · SOAR/SIEM (Wazuh, TheHive).', '-40% de temps de réponse aux incidents, +35% de précision de détection.'],
    },
    award: { en: 'Outstanding with honors (highest distinction from the jury)', fr: 'Mention Très Bien avec félicitations du jury' },
  },
  {
    year: '2023',
    role: { en: 'Strategic Intelligence & Asset Management', fr: 'Veille Stratégique & Asset Management' },
    org: 'TELIGENCIA',
    points: {
      en: ['Built a Python vulnerability scanner over Nmap + Burp Suite APIs to automate asset discovery.'],
      fr: ['Développement d’un scanner de vulnérabilités Python sur les API Nmap + Burp Suite pour automatiser la découverte d’actifs.'],
    },
    award: { en: '', fr: '' },
  },
  {
    year: '2022',
    role: { en: 'Cybersecurity Consultant', fr: 'Consultant Cybersécurité' },
    org: 'EY (Ernst & Young)',
    points: {
      en: ['ISO 27001 compliance frameworks and security posture assessments for large accounts.'],
      fr: ['Cadres de conformité ISO 27001 et évaluations de la posture de sécurité pour grands comptes.'],
    },
    award: { en: '', fr: '' },
  },
  {
    year: '2020',
    role: { en: 'Security & IT Process Developer', fr: 'Développeur Sécurité & Processus IT' },
    org: 'Sopra Banking',
    points: {
      en: ['Windows / Active Directory misconfiguration and privilege-escalation analysis.'],
      fr: ['Analyse des mauvaises configurations Windows / Active Directory et des vecteurs d’élévation de privilèges.'],
    },
    award: { en: '', fr: '' },
  },
  {
    year: '2019',
    role: { en: 'Lead Instructor', fr: 'Instructeur Principal' },
    org: 'GoMyCode',
    points: {
      en: ['Trained 300+ students in C#, Unity and software fundamentals, and ran 25+ technical workshops — fostering agile teaching, communication and technical leadership.'],
      fr: ['Formation de 300+ étudiants aux bases de la programmation C#, Unity et structures logicielles, et animation de 25+ workshops techniques favorisant la pédagogie agile, la communication et le leadership technique.'],
    },
    award: { en: '', fr: '' },
  },
];

export const education = [
  {
    degree: { en: 'MS Cybersecurity & Cyber Defense', fr: 'Mastère Spécialisé Cybersécurité & Cyberdéfense' },
    school: 'Télécom Paris, Institut Polytechnique de Paris', period: '2025 →',
  },
  {
    degree: { en: 'Engineering Degree, Software Engineering', fr: 'Diplôme d’Ingénieur, Génie Logiciel' },
    school: 'MedTech, Tunis', period: '2019 – 2024',
  },
];
