import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = i18n.language;
  
  const goBack = () => {
    navigate(-1);
  };
  
  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    // Map English routes to French routes
    const routeMap: {[key: string]: string} = {
      'home': 'accueil'
    };
    
    return routeMap[path] || path;
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center py-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-700">404</h1>
        <h2 className="mt-6 text-3xl font-bold text-neutral-900">
          {currentLang === 'en' ? 'Page Not Found' : 'Page Non Trouvée'}
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          {currentLang === 'en' 
            ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
            : 'La page que vous recherchez a peut-être été supprimée, son nom a changé ou elle est temporairement indisponible.'}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button 
            onClick={goBack}
            className="btn btn-outline flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentLang === 'en' ? 'Go Back' : 'Retour'}
          </button>
          <Link
            to={`/${currentLang}/${getLocalizedPath('home')}`}
            className="btn btn-primary"
          >
            {currentLang === 'en' ? 'Back to Home' : 'Retour à l\'Accueil'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;