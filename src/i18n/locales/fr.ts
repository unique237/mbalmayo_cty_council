import { Translation } from '../../types/i18n';

const fr: Translation = {
  navigation: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    news: 'Actualités',
    facilities: 'Installations',
    events: 'Événements',
    sports: 'Sports & Loisirs',
    media: 'Médiathèque',
    contact: 'Contact',
  },
  common: {
    languageToggle: 'English',
    readMore: 'Lire Plus',
    viewAll: 'Voir Tout',
    search: 'Rechercher',
    emergency: 'Urgence',
  },
  administration: {
    title: 'Administration Municipale',
    mayorsOffice: {
      title: 'Cabinet du Maire',
      description: "Le plus haut bureau exécutif de la municipalité, responsable de la direction générale et stratégique du conseil municipal.",
    },
    secretaryGeneral: {
      title: 'Secrétariat Général',
      description: 'Placé sous l\'autorité du Maire, le Secrétaire Général supervise la coordination administrative de tous les services municipaux.',
    },
    technicalServices: {
      title: 'Services Techniques',
      description: 'Responsable de l\'urbanisme, de l\'entretien des infrastructures et de la mise en œuvre des projets techniques.',
    },
    financialServices: {
      title: 'Services Financiers',
      description: 'Gère le budget municipal, la comptabilité et la planification financière du conseil municipal.',
    },
    organizationalChart: 'Organigramme',
    organizationalChartAlt: 'Organigramme de la Mairie de Mbalmayo',
  },
  // ... rest of the existing translations
} as const;

export default fr;