import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, MapPin, Tag, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const SingleEventPage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { eventId } = useParams();

  // Mock data for demonstration - replace with actual data fetching
  const event = {
    id: eventId,
    title: currentLang === 'en' 
      ? 'Annual Cultural Festival of Mbalmayo'
      : 'Festival Culturel Annuel de Mbalmayo',
    date: '2024-06-15',
    startTime: '10:00',
    endTime: '22:00',
    location: currentLang === 'en'
      ? 'Municipal Stadium, Mbalmayo'
      : 'Stade Municipal, Mbalmayo',
    category: currentLang === 'en' ? 'Culture' : 'Culture',
    description: currentLang === 'en'
      ? 'Join us for the biggest cultural celebration in Mbalmayo. Experience local music, dance, art, and culinary delights. This year\'s festival will showcase the rich heritage of our community with special performances from traditional dance groups and modern artists.'
      : 'Rejoignez-nous pour la plus grande célébration culturelle de Mbalmayo. Découvrez la musique locale, la danse, l\'art et les délices culinaires. Le festival de cette année mettra en valeur le riche patrimoine de notre communauté avec des performances spéciales de groupes de danse traditionnelle et d\'artistes modernes.',
    image: 'https://res.cloudinary.com/dipmwyrfq/image/upload/v1746351789/Mbalmayo/dnjqdtlbk4p0hkunusxl.jpg',
    organizer: currentLang === 'en' ? 'Mbalmayo City Council' : 'Mairie de Mbalmayo',
    expectedAttendees: '1000+',
  };

  // Mock related events
  /*const relatedEvents = [
    {
      id: '2',
      title: currentLang === 'en' ? 'Youth Sports Tournament' : 'Tournoi Sportif de la Jeunesse',
      date: '2024-06-20',
      image: 'https://example.com/event2.jpg',
    },
    {
      id: '3',
      title: currentLang === 'en' ? 'Art Exhibition' : 'Exposition d\'Art',
      date: '2024-06-25',
      image: 'https://example.com/event3.jpg',
    },
  ];*/

  const formatDate = (date: string) => {
    return format(new Date(date), 'PP', {
      locale: currentLang === 'en' ? undefined : fr,
    });
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          to={`/${currentLang}/events`}
          className="mb-8 inline-flex items-center text-sm font-medium text-neutral-600 hover:text-primary-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {currentLang === 'en' ? 'Back to Events' : 'Retour aux Événements'}
        </Link>

        {/* Event Header */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{event.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {formatDate(event.date)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {event.startTime} - {event.endTime}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4" />
              {event.location}
            </div>
          </div>
        </div>

        {/* Event Image */}
        <div className="mb-8 overflow-hidden rounded-lg">
          <img
            src={event.image}
            alt={event.title}
            className="h-[400px] w-full object-cover"
          />
        </div>

        {/* Event Details */}
        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">
              {currentLang === 'en' ? 'About This Event' : 'À Propos de l\'Événement'}
            </h2>
            <p className="whitespace-pre-line text-neutral-600">{event.description}</p>
          </div>

          <div className="rounded-lg bg-neutral-50 p-6">
            <h3 className="mb-4 text-lg font-semibold">
              {currentLang === 'en' ? 'Event Information' : 'Informations sur l\'Événement'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Tag className="mr-3 h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-neutral-500">
                    {currentLang === 'en' ? 'Category' : 'Catégorie'}
                  </p>
                  <p className="font-medium">{event.category}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="mr-3 h-5 w-5 text-primary-600" />
                <div>
                  <p className="text-sm text-neutral-500">
                    {currentLang === 'en' ? 'Expected Attendance' : 'Participation Prévue'}
                  </p>
                  <p className="font-medium">{event.expectedAttendees}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Events */}
        {/*<div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">
            {currentLang === 'en' ? 'Related Events' : 'Événements Similaires'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedEvents.map((relatedEvent) => (
              <Link
                key={relatedEvent.id}
                to={`/${currentLang}/events/${relatedEvent.id}`}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={relatedEvent.image}
                    alt={relatedEvent.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-semibold text-neutral-900">
                    {relatedEvent.title}
                  </h3>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    {formatDate(relatedEvent.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default SingleEventPage;