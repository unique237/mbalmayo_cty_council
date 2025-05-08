import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Users, Trees as Tree, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const MbalmayoShowcase: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-red-600" />,
      title: currentLang === 'en' ? 'Strategic Location' : 'Emplacement Stratégique',
      description: currentLang === 'en' 
        ? 'Located 50km from Yaoundé, connecting the South and Center regions'
        : 'Situé à 50km de Yaoundé, reliant les régions du Sud et du Centre'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: currentLang === 'en' ? 'Rich Culture' : 'Culture Riche',
      description: currentLang === 'en'
        ? 'Home to diverse ethnic groups with vibrant cultural heritage'
        : 'Abrite des groupes ethniques divers avec un riche patrimoine culturel'
    },
    {
      icon: <Tree className="h-8 w-8 text-green-600" />,
      title: currentLang === 'en' ? 'Natural Beauty' : 'Beauté Naturelle',
      description: currentLang === 'en'
        ? 'Surrounded by lush forests and the scenic Nyong River'
        : 'Entouré de forêts luxuriantes et du pittoresque fleuve Nyong'
    },
    {
      icon: <Sun className="h-8 w-8 text-yellow-500" />,
      title: currentLang === 'en' ? 'Economic Hub' : 'Pôle Économique',
      description: currentLang === 'en'
        ? 'Growing economic center with agriculture and commerce'
        : 'Centre économique en croissance avec agriculture et commerce'
    }
  ];

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
            {currentLang === 'en' ? 'Discover Mbalmayo' : 'Découvrez Mbalmayo'}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {currentLang === 'en'
              ? 'A vibrant city with rich heritage and promising future'
              : 'Une ville dynamique avec un riche patrimoine et un avenir prometteur'}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mb-4 text-neutral-600">{feature.description}</p>
              <Link
                to={currentLang === 'en' ? '/en/about' : '/fr/a-propos'}
                className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                {currentLang === 'en' ? 'View more' : 'En savoir plus'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MbalmayoShowcase;