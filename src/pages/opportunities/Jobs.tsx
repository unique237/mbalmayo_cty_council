import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, Building2, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from "react-router-dom";

const Jobs = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  const location = useLocation();

  //handle language change to stay on Jobs page
    useEffect(() => {
    const getLocalizedPath = () => {
      return currentLang === 'en' ? '/en/jobs' : '/fr/emplois';
    };

    const expectedPath = getLocalizedPath();
    if (location.pathname !== expectedPath) {
      navigate(expectedPath, { replace: true });
    }
  }, [currentLang, navigate, location.pathname]);

  const filters = [
    {
      id: 'all',
      name: currentLang === 'en' ? 'All Opportunities' : 'Toutes les Opportunités'
    },
    {
      id: 'council',
      name: currentLang === 'en' ? 'City Council Jobs' : 'Emplois de la Mairie'
    },
    {
      id: 'other',
      name: currentLang === 'en' ? 'Other Opportunities' : 'Autres Opportunités'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: currentLang === 'en' ? 'Administrative Assistant' : 'Assistant Administratif',
      organization: currentLang === 'en' ? 'Mbalmayo City Council' : 'Mairie de Mbalmayo',
      deadline: '2024-06-30',
      type: 'council',
      description: currentLang === 'en' 
        ? 'Join our administrative team and contribute to the city council operations.'
        : 'Rejoignez notre équipe administrative et contribuez aux opérations de la mairie.'
    },
    {
      id: 2,
      title: currentLang === 'en' ? 'Civil Engineer' : 'Ingénieur Civil',
      organization: 'HYSACAM',
      deadline: '2024-07-15',
      type: 'other',
      description: currentLang === 'en'
        ? 'Looking for experienced civil engineer for waste management projects.'
        : 'Recherche ingénieur civil expérimenté pour projets de gestion des déchets.'
    },
    // Add more job listings as needed
  ];

  const filteredJobs = activeFilter === 'all' 
    ? jobs 
    : jobs.filter(job => job.type === activeFilter);

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
          {currentLang === 'en' ? 'Job Opportunities' : 'Offres d\'Emploi'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en'
            ? 'Explore career opportunities in Mbalmayo and surrounding areas.'
            : 'Découvrez les opportunités de carrière à Mbalmayo et ses environs.'}
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

        {/* Job Listings */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {job.title}
                </h3>
                <div className="flex items-center text-neutral-600">
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>{job.organization}</span>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                {job.description}
              </p>

              <div className="mb-4 flex items-center text-sm text-neutral-600">
                <Calendar className="mr-2 h-4 w-4" />
                <span>
                  {currentLang === 'en' ? 'Deadline: ' : 'Date limite: '}
                  {formatDate(job.deadline)}
                </span>
              </div>

              <Link
                to={`/${currentLang}/opportunities/jobs/${job.id}`}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {currentLang === 'en' ? 'View Details' : 'Voir les Détails'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="rounded-lg bg-neutral-50 p-8 text-center">
            <p className="text-neutral-600">
              {currentLang === 'en'
                ? 'No job opportunities found in this category.'
                : 'Aucune offre d\'emploi trouvée dans cette catégorie.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;