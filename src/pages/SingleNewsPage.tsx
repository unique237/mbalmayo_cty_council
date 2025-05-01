import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, Share2, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const SingleNewsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const currentLang = i18n.language;

  // In a real app, this would fetch from an API
  const newsItem = {
    id: '1',
    title: currentLang === 'en' 
      ? 'City Hall Renovation Project Announced' 
      : 'Annonce du projet de rénovation de l\'Hôtel de Ville',
    content: currentLang === 'en'
      ? `The Mayor has announced a major renovation project for the City Hall building, with construction scheduled to begin next month. The renovation project aims to modernize facilities while preserving the building's historic character.

      The comprehensive renovation will include:
      - Modernization of public service areas
      - Implementation of energy-efficient systems
      - Improved accessibility features
      - Restoration of historic architectural elements
      
      The project is expected to take 18 months to complete and will be carried out in phases to minimize disruption to public services.`
      : `Le Maire a annoncé un important projet de rénovation du bâtiment de l'Hôtel de Ville, les travaux devant commencer le mois prochain. Le projet de rénovation vise à moderniser les installations tout en préservant le caractère historique du bâtiment.

      La rénovation complète comprendra :
      - Modernisation des espaces de service public
      - Mise en place de systèmes écoénergétiques
      - Amélioration des dispositifs d'accessibilité
      - Restauration des éléments architecturaux historiques
      
      Le projet devrait durer 18 mois et sera réalisé par phases pour minimiser les perturbations des services publics.`,
    date: '2025-04-15',
    image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1746046869/hotel-de-ville_mg3z2j.jpg',
    category: currentLang === 'en' ? 'Announcements' : 'Annonces',
    author: 'Communications Department'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (currentLang === 'en') {
      return format(date, 'MMMM d, yyyy');
    } else {
      return format(date, 'd MMMM yyyy', { locale: fr });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You might want to show a toast notification here
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <Link
          // to={`/${currentLang}/news`}
          to={currentLang === 'en' ? `/${currentLang}/news` : `/${currentLang}/actualites`}
          className="mb-8 inline-flex items-center text-neutral-600 hover:text-primary-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {currentLang === 'en' ? 'Back to News' : 'Retour aux Actualités'}
        </Link>

        <article className="mx-auto max-w-4xl">
          <header className="mb-8">
            <div className="mb-4 flex items-center space-x-4">
              <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                <Tag className="mr-1 h-4 w-4" />
                {newsItem.category}
              </span>
              <time className="flex items-center text-sm text-neutral-500">
                <Calendar className="mr-1 h-4 w-4" />
                {formatDate(newsItem.date)}
              </time>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              {newsItem.title}
            </h1>
          </header>

          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose prose-lg mx-auto mt-8 max-w-none">
            {newsItem.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-neutral-700">
                {paragraph}
              </p>
            ))}
          </div>

          <footer className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-8">
            <div className="text-sm text-neutral-500">
              {currentLang === 'en' ? 'Published by' : 'Publié par'}: {newsItem.author}
            </div>
            <button
              onClick={handleShare}
              className="inline-flex items-center rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
            >
              <Share2 className="mr-2 h-4 w-4" />
              {currentLang === 'en' ? 'Share' : 'Partager'}
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default SingleNewsPage;