import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight, Filter, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventsCalendar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeMonth, setActiveMonth] = useState(4); // April (0-indexed)
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<any[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    // Map English routes to French routes
    const routeMap: {[key: string]: string} = {
      'events': 'evenements',
      'events/1': 'evenements/1',
      'events/2': 'evenements/2',
      'events/3': 'evenements/3',
      'events/4': 'evenements/4',
      'events/5': 'evenements/5',
      'events/6': 'evenements/6',
      'events/7': 'evenements/7',
      'events/8': 'evenements/8',
      'events/9': 'evenements/9'
    };
    
    return routeMap[path] || path;
  };
  
  // Sample events data with expanded dataset
  const allEvents = [
    // April Events
    {
      id: '1',
      title: currentLang === 'en' ? 'City Council Meeting' : 'Réunion du Conseil Municipal',
      date: '2025-04-10',
      time: '10:00 - 12:00',
      location: currentLang === 'en' ? 'City Hall, Main Room' : 'Hôtel de Ville, Salle Principale',
      category: currentLang === 'en' ? 'Council' : 'Conseil',
      color: 'bg-blue-100 text-blue-800',
      month: 4,
      description: currentLang === 'en' 
        ? 'Regular monthly meeting of the city council. Open to the public with a Q&A session at the end.'
        : 'Réunion mensuelle régulière du conseil municipal. Ouvert au public avec une séance de questions-réponses à la fin.'
    },
    {
      id: '2',
      title: currentLang === 'en' ? 'Community Market Festival' : 'Festival du Marché Communautaire',
      date: '2025-04-15',
      time: '09:00 - 18:00',
      location: currentLang === 'en' ? 'Central Square' : 'Place Centrale',
      category: currentLang === 'en' ? 'Cultural' : 'Culturel',
      color: 'bg-accent-100 text-accent-800',
      month: 4,
      description: currentLang === 'en'
        ? 'Annual market festival featuring local artisans, food vendors, and live music throughout the day.'
        : 'Festival annuel du marché mettant en vedette des artisans locaux, des vendeurs de nourriture et de la musique live tout au long de la journée.'
    },
    {
      id: '3',
      title: currentLang === 'en' ? 'Public Hearing: Urban Planning' : 'Audience Publique: Urbanisme',
      date: '2025-04-22',
      time: '14:00 - 16:00',
      location: currentLang === 'en' ? 'City Hall, Conference Room' : 'Hôtel de Ville, Salle de Conférence',
      category: currentLang === 'en' ? 'Urban Development' : 'Développement Urbain',
      color: 'bg-secondary-100 text-secondary-800',
      month: 4,
      description: currentLang === 'en'
        ? 'Public consultation regarding the new urban development plan for the eastern district.'
        : 'Consultation publique concernant le nouveau plan d\'aménagement urbain pour le quartier est.'
    },
    {
      id: '4',
      title: currentLang === 'en' ? 'Youth Sports Tournament' : 'Tournoi Sportif de la Jeunesse',
      date: '2025-04-25',
      time: '08:00 - 17:00',
      location: currentLang === 'en' ? 'Municipal Sports Center' : 'Centre Sportif Municipal',
      category: currentLang === 'en' ? 'Sports' : 'Sports',
      color: 'bg-green-100 text-green-800',
      month: 4,
      description: currentLang === 'en'
        ? 'Annual sports competition for youth ages 12-18. Events include football, basketball, and athletics.'
        : 'Compétition sportive annuelle pour les jeunes de 12 à 18 ans. Les événements comprennent le football, le basketball et l\'athlétisme.'
    },
    
    // May Events
    {
      id: '5',
      title: currentLang === 'en' ? 'Labor Day Celebration' : 'Célébration de la Fête du Travail',
      date: '2025-05-01',
      time: '10:00 - 15:00',
      location: currentLang === 'en' ? 'Workers\' Square' : 'Place des Travailleurs',
      category: currentLang === 'en' ? 'Cultural' : 'Culturel',
      color: 'bg-accent-100 text-accent-800',
      month: 5,
      description: currentLang === 'en'
        ? 'Annual celebration honoring workers with speeches, performances, and community activities.'
        : 'Célébration annuelle honorant les travailleurs avec des discours, des performances et des activités communautaires.'
    },
    {
      id: '6',
      title: currentLang === 'en' ? 'Environmental Cleanup Day' : 'Journée de Nettoyage Environnemental',
      date: '2025-05-10',
      time: '08:00 - 12:00',
      location: currentLang === 'en' ? 'Various Locations' : 'Différents Endroits',
      category: currentLang === 'en' ? 'Environment' : 'Environnement',
      color: 'bg-green-100 text-green-800',
      month: 5,
      description: currentLang === 'en'
        ? 'Community cleanup initiative. Volunteers needed to help clean parks, streets, and waterways.'
        : 'Initiative de nettoyage communautaire. Bénévoles recherchés pour aider à nettoyer les parcs, les rues et les cours d\'eau.'
    },
    {
      id: '7',
      title: currentLang === 'en' ? 'City Budget Meeting' : 'Réunion sur le Budget Municipal',
      date: '2025-05-17',
      time: '11:00 - 13:00',
      location: currentLang === 'en' ? 'City Hall Auditorium' : 'Auditorium de l\'Hôtel de Ville',
      category: currentLang === 'en' ? 'Council' : 'Conseil',
      color: 'bg-blue-100 text-blue-800',
      month: 5,
      description: currentLang === 'en'
        ? 'Public meeting to discuss the proposed municipal budget for the upcoming fiscal year.'
        : 'Réunion publique pour discuter du budget municipal proposé pour le prochain exercice fiscal.'
    },
    
    // June Events
    {
      id: '8',
      title: currentLang === 'en' ? 'Summer Festival Launch' : 'Lancement du Festival d\'Été',
      date: '2025-06-05',
      time: '18:00 - 22:00',
      location: currentLang === 'en' ? 'River Park' : 'Parc Riverain',
      category: currentLang === 'en' ? 'Cultural' : 'Culturel',
      color: 'bg-accent-100 text-accent-800',
      month: 6,
      description: currentLang === 'en'
        ? 'Opening ceremony of the summer festival with music, food, and firework display.'
        : 'Cérémonie d\'ouverture du festival d\'été avec musique, nourriture et feu d\'artifice.'
    },
    {
      id: '9',
      title: currentLang === 'en' ? 'Healthcare Information Day' : 'Journée d\'Information sur la Santé',
      date: '2025-06-20',
      time: '09:00 - 16:00',
      location: currentLang === 'en' ? 'Community Health Center' : 'Centre de Santé Communautaire',
      category: currentLang === 'en' ? 'Health' : 'Santé',
      color: 'bg-red-100 text-red-800',
      month: 6,
      description: currentLang === 'en'
        ? 'Free health screenings and information sessions on various health topics. Open to all residents.'
        : 'Dépistages de santé gratuits et séances d\'information sur divers sujets de santé. Ouvert à tous les résidents.'
    }
  ];
  
  // Get unique categories for filters
  const categories = [...new Set(allEvents.map(event => event.category))];
  
  // Filter events based on active month and categories
  useEffect(() => {
    let filtered = allEvents.filter(event => event.month === activeMonth);
    
    if (activeCategories.length > 0) {
      filtered = filtered.filter(event => activeCategories.includes(event.category));
    }
    
    setFilteredEvents(filtered);
  }, [activeMonth, activeCategories]);
  
  // Toggle category filter
  const toggleCategory = (category: string) => {
    if (activeCategories.includes(category)) {
      setActiveCategories(activeCategories.filter(cat => cat !== category));
    } else {
      setActiveCategories([...activeCategories, category]);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setActiveCategories([]);
  };
  
  // Format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (currentLang === 'en') {
      return new Intl.DateTimeFormat('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    } else {
      return new Intl.DateTimeFormat('fr-FR', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric' 
      }).format(date);
    }
  };
  
  // Get month name
  const getMonthName = (monthIndex: number) => {
    const date = new Date(2025, monthIndex, 1);
    if (currentLang === 'en') {
      return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    } else {
      return new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
    }
  };
  
  return (
    <section className="bg-primary-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl">
              {t('home.upcomingEvents')}
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              {currentLang === 'en'
                ? 'Join us at these upcoming city events and activities'
                : 'Rejoignez-nous lors de ces événements et activités à venir'}
            </p>
          </div>
          <Link
            to={`/${currentLang}/${getLocalizedPath('events')}`}
            className="mt-4 flex items-center font-medium text-primary-700 hover:text-primary-800 md:mt-0"
          >
            {t('common.viewAll')}
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        {/* Month selector */}
        <div className="mb-8 flex flex-wrap justify-between gap-4">
          <div className="flex space-x-1 overflow-x-auto rounded-lg bg-white p-1 shadow-sm">
            {[3, 4, 5, 6].map((month) => (
              <button
                key={month}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  activeMonth === month 
                    ? 'bg-primary-100 text-primary-800' 
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
                onClick={() => setActiveMonth(month)}
              >
                {getMonthName(month)}
              </button>
            ))}
          </div>
          
          {/* Filter button */}
          <button 
            className="flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="mr-2 h-4 w-4" />
            {currentLang === 'en' ? 'Filter Events' : 'Filtrer les Événements'}
            {activeCategories.length > 0 && (
              <span className="ml-2 rounded-full bg-primary-100 px-2 py-0.5 text-xs text-primary-800">
                {activeCategories.length}
              </span>
            )}
          </button>
        </div>
        
        {/* Category filters */}
        {showFilters && (
          <div className="mb-8 rounded-lg bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-900">
                {currentLang === 'en' ? 'Filter by Category' : 'Filtrer par Catégorie'}
              </h3>
              {activeCategories.length > 0 && (
                <button 
                  className="flex items-center text-sm text-neutral-500 hover:text-neutral-700"
                  onClick={clearFilters}
                >
                  <X className="mr-1 h-4 w-4" />
                  {currentLang === 'en' ? 'Clear Filters' : 'Effacer les Filtres'}
                </button>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                    activeCategories.includes(category)
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Calendar View - Shows a mini calendar of the current month */}
        <div className="mb-8 hidden rounded-lg bg-white p-6 shadow-md lg:block">
          <div className="mb-4 text-xl font-semibold text-neutral-900">
            {getMonthName(activeMonth)} 2025
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Days of week headers */}
            {currentLang === 'en' 
              ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 text-sm font-medium text-neutral-500">
                  {day}
                </div>
              ))
              : ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map((day) => (
                <div key={day} className="p-2 text-sm font-medium text-neutral-500">
                  {day}
                </div>
              ))
            }
            
            {/* Generate calendar dates */}
            {(() => {
              const firstDay = new Date(2025, activeMonth, 1).getDay();
              const daysInMonth = new Date(2025, activeMonth + 1, 0).getDate();
              const calendar = [];
              
              // Add empty cells for days before the first of the month
              for (let i = 0; i < firstDay; i++) {
                calendar.push(
                  <div key={`empty-${i}`} className="p-2 text-sm text-neutral-300">
                    &nbsp;
                  </div>
                );
              }
              
              // Add days of the month
              for (let day = 1; day <= daysInMonth; day++) {
                const date = `2025-${String(activeMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const hasEvents = allEvents.some(event => event.date === date);
                
                calendar.push(
                  <div 
                    key={`day-${day}`} 
                    className={`relative p-2 text-sm ${
                      hasEvents 
                        ? 'font-semibold text-primary-800' 
                        : 'text-neutral-600'
                    }`}
                  >
                    {day}
                    {hasEvents && (
                      <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary-600"></span>
                    )}
                  </div>
                );
              }
              
              return calendar;
            })()}
          </div>
        </div>
        
        {/* Events list */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/${currentLang}/${getLocalizedPath(`events/${event.id}`)}`}
                className="group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${event.color}`}>
                    {event.category}
                  </span>
                  <CalendarIcon className="h-5 w-5 text-neutral-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-primary-700">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-neutral-600">
                    <CalendarIcon className="mr-2 h-4 w-4 text-neutral-400" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Clock className="mr-2 h-4 w-4 text-neutral-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin className="mr-2 h-4 w-4 text-neutral-400" />
                    {event.location}
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-600 line-clamp-2">
                  {event.description}
                </p>
                <div className="mt-4 flex items-center font-medium text-primary-700 group-hover:text-primary-800">
                  <span>{t('common.readMore')}</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-lg bg-white p-8 text-center shadow-md">
            <CalendarIcon className="mx-auto h-12 w-12 text-neutral-300" />
            <h3 className="mt-4 text-xl font-medium text-neutral-900">
              {currentLang === 'en' ? 'No events found' : 'Aucun événement trouvé'}
            </h3>
            <p className="mt-2 text-neutral-600">
              {currentLang === 'en' 
                ? 'Try selecting a different month or clearing your filters' 
                : 'Essayez de sélectionner un autre mois ou de supprimer vos filtres'}
            </p>
            {activeCategories.length > 0 && (
              <button 
                className="mt-4 rounded-md bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-100"
                onClick={clearFilters}
              >
                {currentLang === 'en' ? 'Clear all filters' : 'Effacer tous les filtres'}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsCalendar;