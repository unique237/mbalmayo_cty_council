export interface Translation {
  navigation: {
    home: string;
    about: string;
    services: string;
    news: string;
    facilities: string;
    events: string;
    sports: string;
    media: string;
    contact: string;
  };
  common: {
    languageToggle: string;
    readMore: string;
    viewAll: string;
    search: string;
    emergency: string;
  };
  administration: {
    title: string;
    mayorsOffice: {
      title: string;
      description: string;
    };
    secretaryGeneral: {
      title: string;
      description: string;
    };
    technicalServices: {
      title: string;
      description: string;
    };
    financialServices: {
      title: string;
      description: string;
    };
    organizationalChart: string;
    organizationalChartAlt: string;
  };
  // ... rest of the existing interface
}