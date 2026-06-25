// Structured, bilingual rewrites of each project report — rendered as themed
// in-site pages (not raw PDFs). The original PDF stays linked for the full version.
// Schema: { slug, title, tag:{en,fr}, date, pdf, stack[], intro:{en,fr},
//           sections:[ { h:{en,fr}, paras:[{en,fr}], bullets:{en:[],fr:[]}? } ] }

export const reports = {
  'predictive-cti': {
    slug: 'predictive-cti',
    title: 'Predictive Cyber Security Intelligence',
    subtitle: { en: 'Enhancing threat detection in banking systems with AI', fr: 'Renforcer la détection de menaces bancaires par l’IA' },
    tag: { en: 'AI · CTI', fr: 'IA · CTI' },
    date: '2024',
    pdf: '/reports/predictive-cti.pdf',
    stack: ['Python', 'scikit-learn', 'XGBoost', 'Streamlit', 'MITRE ATT&CK', 'TheHive'],
    intro: {
      en: 'A predictive cybersecurity solution built at AMEN Bank that uses machine learning to detect and prioritise threats before they materialise — shifting the bank from reactive incident response to proactive threat prevention.',
      fr: 'Une solution de cybersécurité prédictive développée à AMEN Bank, exploitant le machine learning pour détecter et prioriser les menaces avant qu’elles ne se concrétisent — faisant passer la banque d’une réponse réactive à une prévention proactive.',
    },
    sections: [
      {
        h: { en: 'Context', fr: 'Contexte' },
        paras: [{
          en: 'The banking sector faces increasingly sophisticated attacks — phishing, ransomware, zero-days and advanced persistent threats. Traditional, signature-based defences are largely reactive and struggle to keep pace with their growing frequency and complexity.',
          fr: 'Le secteur bancaire fait face à des attaques de plus en plus sophistiquées — phishing, ransomware, zero-days et menaces persistantes avancées (APT). Les défenses traditionnelles, basées sur des signatures, restent réactives et peinent à suivre la fréquence et la complexité croissantes de ces attaques.',
        }],
      },
      {
        h: { en: 'Objective', fr: 'Objectif' },
        paras: [{
          en: 'Develop and evaluate a predictive intelligence system that scores and ranks potential threats using machine learning, so analysts can neutralise high-risk activity preemptively rather than after the fact.',
          fr: 'Concevoir et évaluer un système d’intelligence prédictive qui note et hiérarchise les menaces potentielles via le machine learning, permettant aux analystes de neutraliser les activités à haut risque de manière préventive plutôt qu’après coup.',
        }],
      },
      {
        h: { en: 'Methodology & Data', fr: 'Méthodologie & Données' },
        paras: [{
          en: 'A mixed-methods approach combined quantitative analysis of historical threat data with a qualitative assessment of the bank’s security posture. The pipeline handled data cleaning, feature selection and normalisation to build a comprehensive, relevant training set.',
          fr: 'Une approche mixte combine l’analyse quantitative de données historiques de menaces et l’évaluation qualitative de la posture de sécurité de la banque. Le pipeline gère le nettoyage des données, la sélection de variables et la normalisation pour constituer un jeu d’entraînement pertinent et complet.',
        }],
      },
      {
        h: { en: 'Models', fr: 'Modèles' },
        paras: [{
          en: 'Two supervised classifiers — Random Forest and XGBoost — were trained for threat detection and risk scoring, then compared on accuracy, precision/recall and F1-score via confusion-matrix analysis (built with Pandas, NumPy and scikit-learn).',
          fr: 'Deux classifieurs supervisés — Random Forest et XGBoost — ont été entraînés pour la détection de menaces et le scoring de risque, puis comparés sur l’exactitude, la précision/le rappel et le F1-score via l’analyse de matrices de confusion (Pandas, NumPy, scikit-learn).',
        }],
      },
      {
        h: { en: 'Integration & Dashboard', fr: 'Intégration & Tableau de bord' },
        paras: [{
          en: 'Predictions were mapped to the MITRE ATT&CK framework and enriched through TheHive/Cortex analysers (VirusTotal, Malware Bazaar). A Streamlit dashboard surfaced scored threats and indicators to the SOC for fast, data-driven decisions.',
          fr: 'Les prédictions sont alignées sur le framework MITRE ATT&CK et enrichies via les analyseurs TheHive/Cortex (VirusTotal, Malware Bazaar). Un tableau de bord Streamlit expose les menaces notées et les indicateurs au SOC pour des décisions rapides et fondées sur la donnée.',
        }],
      },
      {
        h: { en: 'Outcome', fr: 'Résultat' },
        paras: [{
          en: 'The solution contributed to a 40% reduction in incident response time and a 35% improvement in detection accuracy, demonstrating the value of predictive analytics for financial-sector cyber defence.',
          fr: 'La solution a contribué à réduire de 40% le temps de réponse aux incidents et à améliorer de 35% la précision de détection, démontrant l’intérêt de l’analytique prédictive pour la cyberdéfense du secteur financier.',
        }],
      },
    ],
  },

  mesalin: {
    slug: 'mesalin',
    title: 'MESALIN — Distributed Message Queue',
    subtitle: { en: 'A scalable, fault-tolerant message-queue system', fr: 'Un système de file de messages scalable et tolérant aux pannes' },
    tag: { en: 'Distributed Systems', fr: 'Systèmes Distribués' },
    date: '2023',
    pdf: '/reports/mesalin.pdf',
    stack: ['Kafka', 'Zookeeper', 'HAProxy', 'Prometheus', 'Grafana', 'Docker'],
    intro: {
      en: 'A distributed message-queue system that load-balances traffic across multiple nodes while demonstrating the core principles of distributed computing: high availability, fault tolerance, consistency and scalability.',
      fr: 'Un système de file de messages distribué qui répartit la charge sur plusieurs nœuds, tout en illustrant les principes fondamentaux du calcul distribué : haute disponibilité, tolérance aux pannes, cohérence et scalabilité.',
    },
    sections: [
      {
        h: { en: 'Overview', fr: 'Vue d’ensemble' },
        paras: [{
          en: 'Producers generate messages at a configurable rate; consumers read and process them or trigger downstream actions. The number of producers, consumers and brokers can scale up or down to match demand, and live metrics expose the system’s health.',
          fr: 'Les producteurs génèrent des messages à un débit configurable ; les consommateurs les lisent et les traitent ou déclenchent des actions. Le nombre de producteurs, consommateurs et brokers s’adapte à la demande, et des métriques temps réel exposent la santé du système.',
        }],
      },
      {
        h: { en: 'Architecture', fr: 'Architecture' },
        paras: [{
          en: 'Producers send data to an HAProxy load balancer that distributes it round-robin across a three-broker Kafka cluster (kafka1/2/3), coordinated by Zookeeper. Consumers read from the cluster; Prometheus scrapes broker metrics and Grafana visualises them. Every component runs in its own Docker container.',
          fr: 'Les producteurs envoient les données à un load balancer HAProxy qui les distribue en round-robin sur un cluster Kafka à trois brokers (kafka1/2/3), coordonné par Zookeeper. Les consommateurs lisent depuis le cluster ; Prometheus collecte les métriques des brokers et Grafana les visualise. Chaque composant tourne dans son propre conteneur Docker.',
        }],
      },
      {
        h: { en: 'Key Capabilities', fr: 'Capacités clés' },
        bullets: {
          en: [
            'Load balancing — even round-robin distribution prevents broker bottlenecks',
            'High availability & fault tolerance — clustering + Zookeeper keep the system running if a broker fails',
            'Scalability — add brokers/producers/consumers to absorb higher volumes',
            'Monitoring & visualisation — Prometheus + Grafana for real-time insight',
            'Durability & recovery — Kafka persists to disk and recovers via replication',
          ],
          fr: [
            'Répartition de charge — distribution round-robin équilibrée, sans goulot d’étranglement',
            'Haute disponibilité & tolérance aux pannes — clustering + Zookeeper maintiennent le service en cas de panne d’un broker',
            'Scalabilité — ajout de brokers/producteurs/consommateurs pour absorber la montée en charge',
            'Supervision & visualisation — Prometheus + Grafana en temps réel',
            'Durabilité & reprise — Kafka persiste sur disque et récupère via la réplication',
          ],
        },
      },
      {
        h: { en: 'Conclusion', fr: 'Conclusion' },
        paras: [{
          en: 'The Kafka–Zookeeper–HAProxy–Prometheus–Grafana stack is a flexible, production-shaped foundation for real-time data processing: it handles high volumes, stays available under failure, and adapts to varied analytics needs.',
          fr: 'La stack Kafka–Zookeeper–HAProxy–Prometheus–Grafana constitue une base flexible et proche de la production pour le traitement temps réel : elle gère de gros volumes, reste disponible en cas de panne et s’adapte à des besoins analytiques variés.',
        }],
      },
    ],
  },

  'odc-attendance': {
    slug: 'odc-attendance',
    title: 'ODC Facial-Recognition Attendance',
    subtitle: { en: 'Attendance tracking via facial recognition for Orange Digital Center', fr: 'Suivi de présence par reconnaissance faciale pour l’Orange Digital Center' },
    tag: { en: 'Full-Stack · AI', fr: 'Full-Stack · IA' },
    date: '2022',
    pdf: '/reports/odc-attendance.pdf',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Python', 'OpenCV'],
    intro: {
      en: 'A web platform that automates attendance at the Orange Digital Center using facial recognition — replacing slow, error-prone manual and badge-based check-ins with real-time, accurate identification.',
      fr: 'Une plateforme web qui automatise la présence à l’Orange Digital Center par reconnaissance faciale — remplaçant les pointages manuels et par badge, lents et sources d’erreurs, par une identification précise en temps réel.',
    },
    sections: [
      {
        h: { en: 'Problem', fr: 'Problème' },
        paras: [{
          en: 'The ODC had to track attendance for 30–40 learners with no fixed check-in time and no access to the data at the centre level. Manual roll-calls and the existing badge system were slow, error-prone and offered no usable insight into attendance or tardiness.',
          fr: 'L’ODC devait suivre la présence de 30 à 40 apprenants sans horaire de pointage fixe et sans accès aux données au niveau du centre. Les appels manuels et le système de badge existant étaient lents, sources d’erreurs et n’offraient aucune visibilité exploitable sur la présence ou les retards.',
        }],
      },
      {
        h: { en: 'Solution', fr: 'Solution' },
        paras: [{
          en: 'A web platform with two roles — admin (ODC staff) and learner. Learners enrol with reference photos on day one, then check in by facial recognition. Attendance is recorded in real time and turned into actionable insight, removing the need for manual check-ins.',
          fr: 'Une plateforme web à deux rôles — administrateur (équipe ODC) et apprenant. Les apprenants s’enrôlent avec des photos de référence le premier jour, puis pointent par reconnaissance faciale. La présence est enregistrée en temps réel et transformée en informations exploitables, supprimant le pointage manuel.',
        }],
      },
      {
        h: { en: 'Architecture & Stack', fr: 'Architecture & Stack' },
        paras: [{
          en: 'A React.js + Bootstrap front-end talks to a Node.js / Express REST API backed by MySQL, while a Python + OpenCV engine handles the facial-recognition matching. The project was delivered in Agile/Scrum sprints.',
          fr: 'Un front-end React.js + Bootstrap dialogue avec une API REST Node.js / Express adossée à MySQL, tandis qu’un moteur Python + OpenCV assure la reconnaissance faciale. Le projet a été livré en sprints Agile/Scrum.',
        }],
      },
      {
        h: { en: 'Privacy', fr: 'Confidentialité' },
        paras: [{
          en: 'Because the system stores biometric and personal data, it was designed with ISO 27001 principles in mind — controlling how facial data is captured, stored and accessed.',
          fr: 'Le système stockant des données biométriques et personnelles, il a été conçu selon les principes ISO 27001 — en maîtrisant la capture, le stockage et l’accès aux données faciales.',
        }],
      },
      {
        h: { en: 'Outcome', fr: 'Résultat' },
        paras: [{
          en: 'Automated, contactless check-in that cuts manual effort and errors and gives the ODC clear, real-time visibility over attendance patterns.',
          fr: 'Un pointage automatisé et sans contact qui réduit l’effort manuel et les erreurs, et donne à l’ODC une visibilité claire et en temps réel sur les tendances de présence.',
        }],
      },
    ],
  },

  'kerberos-sso': {
    slug: 'kerberos-sso',
    title: 'Kerberos SSO Hardening',
    subtitle: { en: 'Deploying and kerberizing a Single Sign-On environment on Linux', fr: 'Déploiement et kerbérisation d’un environnement Single Sign-On sous Linux' },
    tag: { en: 'Infra · IAM', fr: 'Infra · IAM' },
    date: '2026',
    pdf: '/reports/kerberos.pdf',
    stack: ['Linux', 'MIT Kerberos', 'KDC', 'SSH/GSSAPI', 'Wireshark'],
    intro: {
      en: 'A hands-on lab (Télécom Paris, CYBER717) implementing a Kerberos server to provide Single Sign-On on Linux: standing up a KDC, kerberizing a critical service, configuring a client, and analysing the protocol on the wire.',
      fr: 'Un TP (Télécom Paris, CYBER717) mettant en œuvre un serveur Kerberos pour fournir le Single Sign-On sous Linux : déploiement d’un KDC, kerbérisation d’un service critique, configuration d’un client et analyse du protocole sur le réseau.',
    },
    sections: [
      {
        h: { en: 'Objective', fr: 'Objectif' },
        paras: [{
          en: 'Build a working Kerberos realm so users authenticate once and transparently access kerberized services — eliminating repeated password prompts while centralising authentication.',
          fr: 'Construire un realm Kerberos fonctionnel pour qu’un utilisateur s’authentifie une seule fois et accède de façon transparente aux services kerbérisés — supprimant les saisies répétées de mot de passe tout en centralisant l’authentification.',
        }],
      },
      {
        h: { en: 'Environment', fr: 'Environnement' },
        paras: [{
          en: 'Three virtual machines were networked together — an admin/KDC host, a DMZ target hosting the service, and a client — with local DNS configured so all hosts resolve consistently within the realm.',
          fr: 'Trois machines virtuelles sont interconnectées — un hôte admin/KDC, une cible en DMZ hébergeant le service, et un client — avec une DNS locale configurée pour que tous les hôtes se résolvent de façon cohérente dans le realm.',
        }],
      },
      {
        h: { en: 'KDC Configuration', fr: 'Configuration du KDC' },
        paras: [{
          en: 'The Key Distribution Center was set up end-to-end: defining the default realm and KDC/admin-server hostnames, initialising the database, creating the admin principal, applying ACLs, and provisioning service principals and keytabs.',
          fr: 'Le Key Distribution Center est configuré de bout en bout : définition du realm par défaut et des hôtes KDC/admin-server, initialisation de la base, création de l’administrateur, application des ACL, puis provisionnement des principaux de service et des keytabs.',
        }],
      },
      {
        h: { en: 'Service Kerberization', fr: 'Kerbérisation du service' },
        paras: [{
          en: 'An SSH server on the DMZ target was kerberized (GSSAPI), letting authenticated users obtain access via their Kerberos ticket rather than a password. A separate client VM was then configured to join the realm and request tickets.',
          fr: 'Un serveur SSH sur la cible DMZ est kerbérisé (GSSAPI), permettant aux utilisateurs authentifiés d’y accéder via leur ticket Kerberos plutôt qu’un mot de passe. Une VM client distincte est ensuite configurée pour rejoindre le realm et demander des tickets.',
        }],
      },
      {
        h: { en: 'Testing & Wireshark Analysis', fr: 'Tests & Analyse Wireshark' },
        paras: [{
          en: 'After end-to-end testing and troubleshooting, the Kerberos exchanges were captured in Wireshark — observing the AS and TGS request/response flow (ticket-granting ticket, then service tickets) to confirm the protocol behaved as expected.',
          fr: 'Après tests de bout en bout et dépannage, les échanges Kerberos ont été capturés dans Wireshark — observation des flux AS et TGS requête/réponse (ticket-granting ticket, puis tickets de service) pour confirmer le bon comportement du protocole.',
        }],
      },
      {
        h: { en: 'Takeaways', fr: 'Enseignements' },
        paras: [{
          en: 'A complete, working SSO chain on Linux — from KDC to kerberized service to client — plus a packet-level understanding of how Kerberos issues and validates tickets.',
          fr: 'Une chaîne SSO complète et fonctionnelle sous Linux — du KDC au service kerbérisé jusqu’au client — ainsi qu’une compréhension au niveau paquet de l’émission et de la validation des tickets Kerberos.',
        }],
      },
    ],
  },
};
