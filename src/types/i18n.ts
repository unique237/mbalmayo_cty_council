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
  home: {
    heroTitle: string;
    heroSubtitle: string;
    quickLinks: string;
    latestNews: string;
    upcomingEvents: string;
    mayorMessage: {
      title: string;
      subtitle: string;
      content: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    birthMarriage: string;
    businessLicenses: string;
    buildingPermits: string;
    wasteCollection: string;
    allServices: string;
  };
  about: {
    title: string;
    subtitle: string;
    mayor: string;
    councilMembers: string;
    administration: string;
    history: string;
    localGovernment: string;
  };
  footer: {
    quickLinks: string;
    contactUs: string;
    followUs: string;
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
  };
}