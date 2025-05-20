import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search, FileText, Calendar, ArrowRight, Building2 } from 'lucide-react';

const Tenders = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [searchQuery, setSearchQuery] = useState('');

  const tenders = [
    {
      id: 1,
      title: currentLang === 'en' 
        ? 'Road Infrastructure Rehabilitation'
        : 'Réhabilitation des Infrastructures Routières',
      reference: 'MCT-2024/001',
      deadline: '2024-07-15',
      department: currentLang === 'en' 
        ? 'Infrastructure Department'
        : 'Département des Infrastructures',
      description: currentLang === 'en'
        ? 'Tender for the rehabilitation of major roads in Mbalmayo city center.'
        : 'Appel d\'offres pour la réhabilitation des routes principales du centre-ville de Mbalmayo.'
    },
    {
      id: 2,
      title: currentLang === 'en'
        ? 'Public Lighting Installation'
        : 'Installation d\'Éclairage Public',
      reference: 'MCT-2024/002',
      deadline: '2024-07-30',
      department: currentLang === 'en'
        ? 'Urban Planning'
        : 'Urbanisme',
      description: currentLang === 'en'
        ? 'Supply and installation of solar-powered street lights in residential areas.'
        : 'Fourniture et installation de lampadaires solaires dans les zones résidentielles.'
    },
    // Add more tenders as needed
  ];

  const filteredTenders = useMemo(() => {
    return tenders.filter(tender => {
      const searchLower = searchQuery.toLowerCase();
      return (
        tender.title.toLowerCase().includes(searchLower) ||
        tender.reference.toLowerCase().includes(searchLower) ||
        tender.department.toLowerCase().includes(searchLower)
      );
    });
  }, [tenders, searchQuery]);

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
          {currentLang === 'en' ? 'Public Tenders' : 'Appels d\'Offres'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en'
            ? 'Current tender opportunities from Mbalmayo City Council.'
            : 'Opportunités d\'appels d\'offres actuelles de la Mairie de Mbalmayo.'}
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentLang === 'en' ? 'Search tenders...' : 'Rechercher des appels d\'offres...'}
              className="w-full rounded-lg border border-neutral-200 bg-white py-3 pl-12 pr-4 text-neutral-900 placeholder-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        {/* Tenders Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredTenders.map((tender) => (
            <div
              key={tender.id}
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-600">
                  {tender.reference}
                </span>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {tender.title}
                </h3>
                <div className="flex items-center text-neutral-600">
                  <Building2 className="mr-2 h-4 w-4" />
                  <span>{tender.department}</span>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                {tender.description}
              </p>

              <div className="mb-4 flex items-center text-sm text-neutral-600">
                <Calendar className="mr-2 h-4 w-4" />
                <span>
                  {currentLang === 'en' ? 'Submission Deadline: ' : 'Date limite: '}
                  {formatDate(tender.deadline)}
                </span>
              </div>

              <Link
                to={`/${currentLang}/opportunities/tenders/${tender.id}`}
                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                {currentLang === 'en' ? 'View Details' : 'Voir les Détails'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {filteredTenders.length === 0 && (
          <div className="rounded-lg bg-neutral-50 p-8 text-center">
            <p className="text-neutral-600">
              {currentLang === 'en'
                ? 'No tenders found matching your search.'
                : 'Aucun appel d\'offres trouvé correspondant à votre recherche.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tenders;