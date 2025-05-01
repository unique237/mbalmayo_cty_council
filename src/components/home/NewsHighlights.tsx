import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsHighlights: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    // Map English routes to French routes
    const routeMap: {[key: string]: string} = {
      'news': 'actualites',
      'news/1': 'actualites/1',
      'news/2': 'actualites/2',
      'news/3': 'actualites/3'
    };
    
    return routeMap[path] || path;
  };
  
  // Sample news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: '1',
      title: currentLang === 'en' 
        ? 'City Hall Renovation Project Announced' 
        : 'Annonce du projet de rénovation de l\'Hôtel de Ville',
      excerpt: currentLang === 'en'
        ? 'The Mayor has announced a major renovation project for the City Hall building, with construction scheduled to begin next month.'
        : 'Le Maire a annoncé un important projet de rénovation du bâtiment de l\'Hôtel de Ville, les travaux devant commencer le mois prochain.',
      date: '2025-04-15',
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1746046869/hotel-de-ville_mg3z2j.jpg',
      category: currentLang === 'en' ? 'Announcements' : 'Annonces'
    },
    {
      id: '2',
      title: currentLang === 'en'
        ? 'New Waste Collection Schedule'
        : 'Nouveau calendrier de collecte des déchets',
      excerpt: currentLang === 'en'
        ? 'Starting next week, the city will implement a new waste collection schedule. Please check the updated timetable for your area.'
        : 'À partir de la semaine prochaine, la ville mettra en place un nouveau calendrier de collecte des déchets. Veuillez consulter le calendrier mis à jour pour votre zone.',
      date: '2025-04-10',
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1746083956/hysacam_vlkpsy.avif',
      category: currentLang === 'en' ? 'Public Notices' : 'Avis Publics'
    },
    {
      id: '3',
      title: currentLang === 'en'
        ? 'Community Market to Open This Weekend'
        : 'Ouverture du marché communautaire ce week-end',
      excerpt: currentLang === 'en'
        ? 'The new community market will open this weekend featuring local produce, crafts, and entertainment for the whole family.'
        : 'Le nouveau marché communautaire ouvrira ses portes ce week-end avec des produits locaux, de l\'artisanat et des divertissements pour toute la famille.',
      date: '2025-04-05',
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1746045724/mbalmayo_hkpcij.jpg',
      category: currentLang === 'en' ? 'Events' : 'Événements'
    }
  ];
  
  // Format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (currentLang === 'en') {
      return new Intl.DateTimeFormat('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    }
  };
  
  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              {t('home.latestNews')}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {currentLang === 'en' 
                ? 'Stay updated with the latest news and announcements from the City Council'
                : 'Restez informé des dernières actualités et annonces de la Mairie'}
            </p>
          </div>
          <Link
            to={`/${currentLang}/${getLocalizedPath('news')}`}
            className="mt-4 flex items-center font-medium text-primary-700 hover:text-primary-800 md:mt-0"
          >
            {t('common.viewAll')}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              to={`/${currentLang}/${getLocalizedPath(`news/${item.id}`)}`}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                    {item.category}
                  </span>
                  <div className="flex items-center text-xs text-neutral-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-primary-700">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm text-neutral-600">
                  {item.excerpt}
                </p>
                <div className="flex items-center font-medium text-primary-700 group-hover:text-primary-800">
                  <span>{t('common.readMore')}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHighlights;