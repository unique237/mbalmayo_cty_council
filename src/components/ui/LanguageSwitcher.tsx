import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  const currentLang = i18n.language;
  const targetLang = currentLang === 'en' ? 'fr' : 'en';
  
  const switchLanguage = () => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/');
    
    // Maps for translating routes between languages
    const enToFrRoutes: {[key: string]: string} = {
      'home': 'accueil',
      'about': 'a-propos',
      'services': 'services',
      'news': 'actualites',
      'facilities': 'installations',
      'events': 'evenements',
      'sports': 'sports',
      'media': 'mediatheque',
      'contact': 'contact'
    };
    
    const frToEnRoutes: {[key: string]: string} = {
      'accueil': 'home',
      'a-propos': 'about',
      'services': 'services',
      'actualites': 'news',
      'installations': 'facilities',
      'evenements': 'events',
      'sports': 'sports',
      'mediatheque': 'media',
      'contact': 'contact'
    };
    
    // Change the language in i18n
    i18n.changeLanguage(targetLang);
    
    // Construct the new path with the target language
    if (pathSegments.length >= 3) {
      const currentMainRoute = pathSegments[2];
      let targetMainRoute;
      
      if (currentLang === 'en') {
        targetMainRoute = enToFrRoutes[currentMainRoute] || currentMainRoute;
      } else {
        targetMainRoute = frToEnRoutes[currentMainRoute] || currentMainRoute;
      }
      
      // Replace language code and main route
      pathSegments[1] = targetLang;
      pathSegments[2] = targetMainRoute;
      
      // Navigate to the translated path
      navigate(pathSegments.join('/'));
    } else {
      // Fallback to home page if path structure is not as expected
      navigate(`/${targetLang}/${targetLang === 'en' ? 'home' : 'accueil'}`);
    }
  };
  
  return (
    <button
      className="flex items-center justify-center space-x-1 rounded-full bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-200"
      onClick={switchLanguage}
      aria-label={`Switch language to ${t('common.languageToggle')}`}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden md:inline">{t('common.languageToggle')}</span>
    </button>
  );
};

export default LanguageSwitcher;