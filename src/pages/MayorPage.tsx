import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Calendar, Award, FileText, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const MayorPage: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [showBiography, setShowBiography] = useState(false);

  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    const routeMap: {[key: string]: string} = {
      'contact': 'contact'
    };
    
    return routeMap[path] || path;
  };

  const toggleBiography = () => {
    setShowBiography(!showBiography);
  };

  const biography = {
    en: [
      "Born and raised in Mbalmayo, Mr. ZANG MBA OBELE Dieudonné has dedicated his life to public service. After completing his education in Public Administration at the University of Yaoundé, he returned to his hometown with a vision to contribute to its development.",
      "With over 20 years of experience in local governance, Mr. ZANG MBA OBELE has served in various capacities before being elected as Mayor in 2020. His tenure has been marked by significant improvements in infrastructure, education, and healthcare services.",
      "A firm believer in participatory governance, the Mayor has established multiple platforms for citizen engagement and feedback. His administration's transparency and accountability have earned the trust of residents and recognition from national and international organizations.",
      "Outside of his official duties, Mayor ZANG MBA OBELE is a passionate advocate for youth development and environmental conservation. He is married with three children and enjoys farming in his spare time."
    ],
    fr: [
      "Né et élevé à Mbalmayo, M. ZANG MBA OBELE Dieudonné a consacré sa vie au service public. Après avoir terminé ses études en Administration Publique à l'Université de Yaoundé, il est retourné dans sa ville natale avec une vision de contribuer à son développement.",
      "Avec plus de 20 ans d'expérience dans la gouvernance locale, M. ZANG MBA OBELE a servi à différents postes avant d'être élu Maire en 2020. Son mandat a été marqué par des améliorations significatives dans les infrastructures, l'éducation et les services de santé.",
      "Fervent défenseur d'une gouvernance participative, le Maire a établi de multiples plateformes pour l'engagement et les retours des citoyens. La transparence et la responsabilité de son administration ont gagné la confiance des résidents et la reconnaissance d'organisations nationales et internationales.",
      "En dehors de ses fonctions officielles, le Maire ZANG MBA OBELE est un ardent défenseur du développement des jeunes et de la conservation de l'environnement. Il est marié et père de trois enfants et aime l'agriculture pendant son temps libre."
    ]
  };

  const achievements = [
    {
      year: '2023',
      title: currentLang === 'en' 
        ? 'Urban Development Initiative'
        : 'Initiative de Développement Urbain',
      description: currentLang === 'en'
        ? 'Led major infrastructure improvements across the city'
        : 'A dirigé d\'importantes améliorations des infrastructures dans la ville'
    },
    {
      year: '2022',
      title: currentLang === 'en'
        ? 'Environmental Conservation Program'
        : 'Programme de Conservation Environnementale',
      description: currentLang === 'en'
        ? 'Launched city-wide recycling and green space initiatives'
        : 'Lancement d\'initiatives de recyclage et d\'espaces verts dans toute la ville'
    },
    {
      year: '2021',
      title: currentLang === 'en'
        ? 'Education Enhancement Project'
        : 'Projet d\'Amélioration de l\'Éducation',
      description: currentLang === 'en'
        ? 'Renovated schools and established new educational programs'
        : 'Rénovation des écoles et création de nouveaux programmes éducatifs'
    }
  ];

  const priorities = [
    {
      icon: <Award className="h-6 w-6 text-primary-600" />,
      title: currentLang === 'en' ? 'Economic Development' : 'Développement Économique',
      description: currentLang === 'en'
        ? 'Fostering local business growth and attracting investment'
        : 'Favoriser la croissance des entreprises locales et attirer les investissements'
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary-600" />,
      title: currentLang === 'en' ? 'Community Engagement' : 'Engagement Communautaire',
      description: currentLang === 'en'
        ? 'Regular town halls and citizen participation programs'
        : 'Réunions publiques régulières et programmes de participation citoyenne'
    },
    {
      icon: <FileText className="h-6 w-6 text-primary-600" />,
      title: currentLang === 'en' ? 'Transparent Governance' : 'Gouvernance Transparente',
      description: currentLang === 'en'
        ? 'Open communication and accountable administration'
        : 'Communication ouverte et administration responsable'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-lg lg:aspect-auto lg:h-[600px]">
            <img
              src="https://res.cloudinary.com/dipmwyrfq/image/upload/v1745938335/mayo_yokbtz.jpg"
              alt="Mayor of Mbalmayo"
              className="h-full w-full object-cover"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-3xl font-bold text-neutral-900 md:text-4xl">
              {currentLang === 'en' ? 'Mr. ZANG MBA OBELE Dieudonné' : 'M. ZANG MBA OBELE Dieudonné'}
            </h1>
            <p className="mb-6 text-xl font-medium text-primary-700">
              {currentLang === 'en' ? 'Mayor of Mbalmayo' : 'Maire de Mbalmayo'}
            </p>
            <div className="mb-8 space-y-4 text-neutral-700">
              <p>
                {currentLang === 'en'
                  ? 'As Mayor of Mbalmayo, I am committed to serving our community with dedication and vision. Our city\'s rich cultural heritage and strategic location position us uniquely for sustainable development and growth.'
                  : 'En tant que Maire de Mbalmayo, je m\'engage à servir notre communauté avec dévouement et vision. Le riche patrimoine culturel et l\'emplacement stratégique de notre ville nous positionnent de manière unique pour un développement durable et la croissance.'}
              </p>
              <p>
                {currentLang === 'en'
                  ? 'Together, we are building a more prosperous, inclusive, and sustainable city for all residents. I invite you to join us in this exciting journey of progress and community development.'
                  : 'Ensemble, nous construisons une ville plus prospère, inclusive et durable pour tous les résidents. Je vous invite à nous rejoindre dans cette passionnante aventure de progrès et de développement communautaire.'}
              </p>
            </div>
            
            {/* Biography Dropdown */}
            <div className="mb-8">
              <button 
                onClick={toggleBiography}
                className="flex w-full items-center justify-between rounded-lg border border-primary-200 bg-primary-50 px-4 py-3 text-left text-lg font-medium text-primary-700 transition hover:bg-primary-100"
              >
                <span>{currentLang === 'en' ? 'Biography' : 'Biographie'}</span>
                {showBiography ? 
                  <ChevronUp className="h-5 w-5 text-primary-600" /> : 
                  <ChevronDown className="h-5 w-5 text-primary-600" />
                }
              </button>
              
              {showBiography && (
                <div className="mt-4 space-y-4 rounded-lg border border-primary-100 bg-white p-6 text-neutral-700 shadow-sm">
                  {biography[currentLang === 'en' ? 'en' : 'fr'].map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-600">
                <Mail className="h-5 w-5 text-primary-600" />
                <span>mayor@mbalmayo.cm</span>
              </div>
              <div className="flex items-center space-x-3 text-neutral-600">
                <Phone className="h-5 w-5 text-primary-600" />
                <span>+237 222 28 46 20</span>
              </div>
            </div>
          </div>
        </div>

        {/* Priorities Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-neutral-900 md:text-3xl">
            {currentLang === 'en' ? 'Key Priorities' : 'Priorités Clés'}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {priorities.map((priority, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4">{priority.icon}</div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">{priority.title}</h3>
                <p className="text-neutral-600">{priority.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Timeline */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-neutral-900 md:text-3xl">
            {currentLang === 'en' ? 'Recent Achievements' : 'Réalisations Récentes'}
          </h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-primary-200" />
                <div className="absolute -left-1.5 top-1.5 h-4 w-4 rounded-full border-2 border-primary-600 bg-white" />
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-2 text-sm font-medium text-primary-700">{achievement.year}</div>
                  <h3 className="mb-2 text-lg font-semibold text-neutral-900">{achievement.title}</h3>
                  <p className="text-neutral-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-lg bg-primary-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900">
            {currentLang === 'en' 
              ? 'Want to Get in Touch?' 
              : 'Vous Souhaitez Nous Contacter ?'}
          </h2>
          <p className="mb-6 text-neutral-600">
            {currentLang === 'en'
              ? 'Have questions or suggestions? We\'d love to hear from you.'
              : 'Vous avez des questions ou des suggestions ? Nous aimerions vous entendre.'}
          </p>
          <Link
            to={`/${currentLang}/${getLocalizedPath('contact')}`}
            className="btn btn-primary"
          >
            {currentLang === 'en' ? 'Contact Us' : 'Contactez-Nous'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MayorPage;