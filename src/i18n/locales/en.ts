import { Translation } from '../../types/i18n';

const en: Translation = {
  navigation: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    news: 'News',
    facilities: 'Facilities',
    events: 'Events',
    sports: 'Sports & Leisure',
    media: 'Media Library',
    contact: 'Contact',
  },
  common: {
    languageToggle: 'Français',
    readMore: 'Read More',
    viewAll: 'View All',
    search: 'Search',
    emergency: 'Emergency',
  },
  administration: {
    title: 'Municipal Administration',
    mayorsOffice: {
      title: "Mayor's Office",
      description: 'The highest executive office of the municipality, responsible for overall leadership and strategic direction of the city council.',
    },
    secretaryGeneral: {
      title: 'Secretary General',
      description: 'Placed under the authority of the Mayor, the Secretary General oversees the administrative coordination of all municipal services.',
    },
    technicalServices: {
      title: 'Technical Services',
      description: 'Responsible for urban planning, infrastructure maintenance, and technical project implementation.',
    },
    financialServices: {
      title: 'Financial Services',
      description: 'Manages the municipal budget, accounting, and financial planning of the city council.',
    },
    organizationalChart: 'Organizational Chart',
    organizationalChartAlt: 'Mbalmayo City Council Organizational Chart',
  },
  // ... rest of the existing translations
} as const;

export default en;