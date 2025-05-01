import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Stethoscope, BookOpen, Bus, Store, ShieldCheck, ArrowRight } from 'lucide-react';

// Centralized route mapping for English and French
const ROUTE_MAP: { [key: string]: { en: string; fr: string } } = {
  facilities: { en: 'facilities', fr: 'installations' },
  healthCenters: { en: 'facilities/health-centers', fr: 'installations/centres-sante' },
  schools: { en: 'facilities/schools', fr: 'installations/ecoles' },
  transportRoads: { en: 'facilities/transport-roads', fr: 'installations/transport-routes' },
  markets: { en: 'facilities/markets', fr: 'installations/marches' },
  security: { en: 'facilities/security', fr: 'installations/securite' },
  all: { en: 'facilities/all', fr: 'installations/tous' },
};

const FacilitiesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Helper to get localized path
  const getLocalizedPath = (key: string) => {
    const route = ROUTE_MAP[key];
    return route ? route[currentLang === 'en' ? 'en' : 'fr'] : key;
  };

  // Facility data with translation keys
  const facilities = [
    {
      key: 'healthCenters',
      icon: <Stethoscope className="h-10 w-10 text-primary-600" />,
      color: 'bg-primary-50',
    },
    {
      key: 'schools',
      icon: <BookOpen className="h-10 w-10 text-secondary-600" />,
      color: 'bg-secondary-50',
    },
    {
      key: 'transportRoads',
      icon: <Bus className="h-10 w-10 text-neutral-700" />,
      color: 'bg-neutral-50',
    },
    {
      key: 'markets',
      icon: <Store className="h-10 w-10 text-accent-500" />,
      color: 'bg-accent-50',
    },
    {
      key: 'security',
      icon: <ShieldCheck className="h-10 w-10 text-primary-600" />,
      color: 'bg-primary-50',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            {t('facilitiesPage.header.title')}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {t('facilitiesPage.header.subtitle')}
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <Link
              key={facility.key}
              to={`/${currentLang}/${getLocalizedPath(facility.key)}`}
              className={`card group ${facility.color} p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:ring-1 hover:ring-neutral-300`}
            >
              <div className="mb-4">{facility.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                {t(`facilitiesPage.items.${facility.key}.title`)}
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                {t(`facilitiesPage.items.${facility.key}.description`)}
              </p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary-700 group-hover:text-primary-800">
                <span>{t('facilitiesPage.viewAll')}</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPage;