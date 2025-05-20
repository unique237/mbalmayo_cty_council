import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, Building2, ArrowRight, Clock } from 'lucide-react';

const Internships = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    {
      id: 'all',
      name: currentLang === 'en' ? 'All Internships' : 'Tous les Stages'
    },
    {
      id: 'council',
      name: currentLang === 'en' ? 'City Council Internships' : 'Stages à la Mairie'
    },
    {
      id: 'other',
      name: currentLang === 'en' ? 'Partner Organizations' : 'Organisations Partenaires'
    }
  ];

  const internships = [
    {
      id: 1,
      title: currentLang === 'en' ? 'Urban Planning Intern' : 'Stagiaire en Urbanisme',
      organization: currentLang === 'en' ? 'Mbalmayo City Council' : 'Mairie de Mbalmayo',
      deadline: '2024-07-30',
      duration: currentLang === 'en' ? '3 months' : '3 mois',
      type: 'council',
      description: currentLang === 'en'
        ? 'Gain practical experience in urban development and city planning.'
        : 'Acquérir une expérience pratique en développement urbain et planification.'
    },
    {
      id: 2,
      title: currentLang === 'en' ? 'Environmental Management Intern' : 'Stagiaire en Gestion Environnementale',
      organization: 'HYSACAM',
      deadline: '2024-08-15',
      duration: currentLang === 'en' ? '6 months' : '6 mois',
      type: 'other',
      description: currentLang === 'en'
        ? 'Support environmental initiatives and waste management projects.'
        : 'Soutenir les initiatives environnementales et les projets de gestion des déchets.'
    },
    // Add more internship listings as needed
  ];

  const filteredInternships = activeFilter === 'all'
    ? internships
    : internships.filter(internship => internship.type === activeFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(currentLang === 'en' ? 'en-US' : 'fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Internship Opportunities' : 'Opportunités de Stage'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en'
            ? 'Discover internship opportunities and start your career journey in Mbalmayo.'
            : 'Découvrez les opportunités de stage et commencez votre parcours professionnel à Mbalmayo.'}
        </p>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Internship Listings */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredInternships.map((internship) => (
            <div
              key={internship.id}
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {internship.title}
                  </h3>
                  <span className="ml-2 rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-600">
                    {internship.duration}
                  </span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>{internship.organization}</span>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                {internship.description}
              </p>

              <div className="mb-4 flex items-center text-sm text-neutral-600">
                <Calendar className="mr-2 h-4 w-4" />
                <span>
                  {currentLang === 'en' ? 'Application Deadline: ' : 'Date limite: '}
                  {formatDate(internship.deadline)}
                </span>
              </div>

              <Link
                to={`/${currentLang}/opportunities/internships/${internship.id}`}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {currentLang === 'en' ? 'View Details' : 'Voir les Détails'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="rounded-lg bg-neutral-50 p-8 text-center">
            <p className="text-neutral-600">
              {currentLang === 'en'
                ? 'No internship opportunities found in this category.'
                : 'Aucune opportunité de stage trouvée dans cette catégorie.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Internships;