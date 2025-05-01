import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MayorMessage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    // Map English routes to French routes
    const routeMap: {[key: string]: string} = {
      'about/mayor': 'a-propos/mayor'  // Fixed to match the requested route
    };
    
    return routeMap[path] || path;
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative order-2 mt-6 h-[400px] overflow-hidden rounded-lg lg:order-1 lg:mt-0">
            <img 
              src="https://res.cloudinary.com/dipmwyrfq/image/upload/v1745938335/mayo_yokbtz.jpg" 
              alt="Mayor of Mbalmayo" 
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-900/80 to-transparent p-6 text-white">
              <p className="text-sm font-medium">
                {currentLang === 'en' ? 'Mr. ZANG MBA OBELE Dieudonné ' : 'M. ZANG MBA OBELE Dieudonné'}
              </p>
              <p className="text-xs opacity-80">
                {currentLang === 'en' ? 'Mayor of Mbalmayo' : 'Maire de Mbalmayo'}
              </p>
            </div>
          </div>
          
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              {t('home.mayorMessage.title')}
            </h2>
            <p className="mt-2 text-lg font-medium text-primary-700">
              {t('home.mayorMessage.subtitle')}
            </p>
            <div className="mt-6 space-y-4 text-neutral-700">
              <p>
                {t('home.mayorMessage.content')}
              </p>
              <p>
                {currentLang === 'en'
                  ? 'Our city has a rich cultural heritage and abundant natural resources. As we work towards sustainable development, I invite all citizens to participate actively in our community initiatives.'
                  : 'Notre ville a un riche patrimoine culturel et d\'abondantes ressources naturelles. Alors que nous œuvrons pour un développement durable, j\'invite tous les citoyens à participer activement à nos initiatives communautaires.'}
              </p>
            </div>
            <div className="mt-8">
              <Link 
                to={`/${currentLang}/${getLocalizedPath('about/mayor')}`}
                className="btn btn-primary"
              >
                {currentLang === 'en' ? 'Read Full Message' : 'Lire le Message Complet'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MayorMessage;