import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Store, Volume2, FileText, Home, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  link: string;
}

const ServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const services: ServiceCard[] = [
    {
      id: 'birth-certificate',
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: 'Birth Certificate',
      titleFr: 'Acte de Naissance',
      description: 'Request and obtain birth certificates for administrative purposes',
      descriptionFr: 'Demander et obtenir des actes de naissance à des fins administratives',
      link: `/${currentLang}/services/birth-marriage`,
    },
    {
      id: 'marriage-certificate',
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: 'Marriage Certificate',
      titleFr: 'Acte de Mariage',
      description: 'Apply for marriage certificates and related documentation',
      descriptionFr: 'Demander des actes de mariage et la documentation connexe',
      link: `/${currentLang}/services/birth-marriage`,
    },
    {
      id: 'hall-rental',
      icon: <Building2 className="h-6 w-6" />,
      title: 'Hall Rental',
      titleFr: 'Location de Salle',
      description: 'Rent our municipal halls for your events and ceremonies',
      descriptionFr: 'Louez nos salles municipales pour vos événements et cérémonies',
      link: `/${currentLang}/services/hall-rental`,
    },
    {
      id: 'kiosk-rental',
      icon: <Store className="h-6 w-6 text-yellow-400" />,
      title: 'Kiosk Rental',
      titleFr: 'Location de Kiosque',
      description: 'Rent municipal kiosks for your business activities',
      descriptionFr: 'Louez des kiosques municipaux pour vos activités commerciales',
      link: `/${currentLang}/services/kiosk-rental`,
    },
    {
      id: 'publicity',
      icon: <Volume2 className="h-6 w-6 text-red-500" />,
      title: 'Advertising Services',
      titleFr: 'Services Publicitaires',
      description: 'Advertise your business on municipal spaces and platforms',
      descriptionFr: 'Faites la publicité de votre entreprise sur les espaces et plateformes municipaux',
      link: `/${currentLang}/services/publicity`,
    },
    {
      id: 'housing',
      icon: <Home className="h-6 w-6 text-orange-500" />,
      title: 'Housing Permits',
      titleFr: 'Permis de Construire',
      description: 'Apply for building permits and construction authorizations',
      descriptionFr: 'Demandez des permis de construire et des autorisations de construction',
      link: `/${currentLang}/services/housing`,
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{t('services.title')}</h1>
        <p className="mb-12 text-lg text-neutral-700">{t('services.subtitle')}</p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.link}
              className="group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                {currentLang === 'en' ? service.title : service.titleFr}
              </h3>
              <p className="text-neutral-600">
                {currentLang === 'en' ? service.description : service.descriptionFr}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;