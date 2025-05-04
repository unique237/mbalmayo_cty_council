import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageSlider: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [currentSlide, setCurrentSlide] = useState(0);

  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }

    const routeMap: { [key: string]: string } = {
      home: 'accueil',
      about: 'a-propos',
      services: 'services',
      news: 'actualites',
      facilities: 'installations',
      events: 'evenements',
      sports: 'sports',
      media: 'mediatheque',
      contact: 'contact',
    };

    const segments = path.split('/');
    if (segments.length > 0) {
      const mainRoute = segments[0];
      segments[0] = routeMap[mainRoute] || mainRoute;
    }

    return segments.join('/');
  };

  const slides = [
    {
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1745938334/Mbalmayo_Camerounactuel.com__x5w8cu.jpg',
      title: currentLang === 'en' ? 'Welcome to Mbalmayo City Council' : 'Bienvenue à la Mairie de Mbalmayo',
      subtitle: currentLang === 'en' ? 'Serving our community with excellence' : 'Servir notre communauté avec excellence',
      description: currentLang === 'en'
        ? 'Explore our initiatives, services, and commitment to improving the lives of our residents.'
        : 'Découvrez nos initiatives, services et engagement pour améliorer la vie de nos résidents.',
      cta: {
        label: currentLang === 'en' ? 'Learn More' : 'En Savoir Plus',
        path: 'about'
      }
    },
    {
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1745938334/cathedrale_tfbrfa.webp',
      title: currentLang === 'en' ? 'Discover Our Rich Culture' : 'Découvrez Notre Riche Culture',
      subtitle: currentLang === 'en' ? 'Experience the vibrant heritage of Mbalmayo' : 'Découvrez le patrimoine vivant de Mbalmayo',
      description: currentLang === 'en'
        ? 'Join us for cultural events, festivals, and celebrations that showcase our traditions.'
        : 'Participez à nos événements culturels, festivals et célébrations mettant en valeur nos traditions.',
      cta: {
        label: currentLang === 'en' ? 'View Events' : 'Voir les Événements',
        path: 'events'
      }
    },
    {
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1745938764/jjj_x4fg2d.jpg',
      title: currentLang === 'en' ? 'Building a Sustainable Future' : 'Construire un Avenir Durable',
      subtitle: currentLang === 'en' ? 'Committed to environmental stewardship' : 'Engagés pour la protection de l\'environnement',
      description: currentLang === 'en'
        ? 'Learn about our eco-friendly projects and initiatives for a greener Mbalmayo.'
        : 'Découvrez nos projets écologiques et initiatives pour un Mbalmayo plus vert.',
      cta: {
        label: currentLang === 'en' ? 'Explore Projects' : 'Explorer les Projets',
        path: 'services'
      }
    },
    {
      image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351448/Mbalmayo/yg0uhq6ybpkzwzcmbmdl.jpg',
      title: currentLang === 'en' ? 'Community Development' : 'Développement Communautaire',
      subtitle: currentLang === 'en' ? 'Working together for progress' : 'Travailler ensemble pour le progrès',
      description: currentLang === 'en'
        ? 'Stay updated on our community programs and development efforts.'
        : 'Restez informé sur nos programmes communautaires et efforts de développement.',
      cta: {
        label: currentLang === 'en' ? 'Read News' : 'Lire les Actualités',
        path: 'news'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden z-0">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                {slide.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-200 md:text-xl">
                {slide.subtitle}
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base text-neutral-300 md:text-lg">
                {slide.description}
              </p>
              <Link
                to={`/${currentLang}/${getLocalizedPath(slide.cta.path)}`}
                className="mt-6 inline-block rounded-md bg-primary-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-800"
              >
                {slide.cta.label}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;