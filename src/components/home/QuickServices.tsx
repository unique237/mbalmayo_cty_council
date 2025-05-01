import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileText, Building, FileCheck, Recycle, ArrowRight } from 'lucide-react';

const QuickServices: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    // Map English routes to French routes
    const routeMap: {[key: string]: string} = {
      'services': 'services',
      'services/birth-marriage': 'services/naissance-mariage',
      'services/business-licenses': 'services/licences-commerciales',
      'services/building-permits': 'services/permis-construire',
      'services/waste-collection': 'services/collecte-dechets',
      'services/all': 'services/tous'
    };
    
    return routeMap[path] || path;
  };
  
  const services = [
    {
      title: t('services.birthMarriage'),
      description: currentLang === 'en' 
        ? 'Birth certificates, marriage licenses, and family records.'
        : 'Certificats de naissance, licences de mariage et registres familiaux.',
      icon: <FileText className="h-10 w-10 text-primary-600" />,
      path: 'services/birth-marriage',
      color: 'bg-primary-50'
    },
    {
      title: t('services.businessLicenses'),
      description: currentLang === 'en'
        ? 'Commercial permits and business registration services.'
        : 'Permis commerciaux et services d\'enregistrement des entreprises.',
      icon: <Building className="h-10 w-10 text-secondary-600" />,
      path: 'services/business-licenses',
      color: 'bg-secondary-50'
    },
    {
      title: t('services.buildingPermits'),
      description: currentLang === 'en'
        ? 'Construction permits, renovations, and property development.'
        : 'Permis de construction, rénovations et développement immobilier.',
      icon: <FileCheck className="h-10 w-10 text-neutral-700" />,
      path: 'services/building-permits',
      color: 'bg-neutral-50'
    },
    {
      title: t('services.wasteCollection'),
      description: currentLang === 'en'
        ? 'Household waste, recycling, and special waste collection.'
        : 'Déchets ménagers, recyclage et collecte de déchets spéciaux.',
      icon: <Recycle className="h-10 w-10 text-accent-500" />,
      path: 'services/waste-collection',
      color: 'bg-accent-50'
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            {t('home.services.title')}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {t('home.services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/${currentLang}/${getLocalizedPath(service.path)}`}
              className={`card group ${service.color} transition-all duration-300 hover:shadow-lg hover:ring-1 hover:ring-neutral-300`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">{service.title}</h3>
              <p className="mb-4 text-sm text-neutral-600">{service.description}</p>
              <div className="mt-auto flex items-center text-sm font-medium text-primary-700 group-hover:text-primary-800">
                <span>{currentLang === 'en' ? 'Learn more' : 'En savoir plus'}</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to={`/${currentLang}/${getLocalizedPath('services/all')}`}
            className="btn btn-primary"
          >
            {t('services.allServices')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QuickServices;