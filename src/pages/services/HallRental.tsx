import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Clock, Wallet, CheckCircle, AlertCircle, Calendar, Users } from 'lucide-react';

const HallRental = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedHall, setSelectedHall] = useState('');

  const rentalInfo = {
    id: 'hall-rental',
    icon: <Building2 className="h-8 w-8" />,
    title: currentLang === 'en' ? 'Hall Rental Service' : 'Service de Location de Salles',
    requirements: currentLang === 'en'
      ? [
          'Valid ID card (original and copy)',
          'Completed rental application form',
          'Security deposit',
          'Rental fee payment receipt',
          'Event description and schedule'
        ]
      : [
          'Carte d\'identité valide (original et copie)',
          'Formulaire de demande de location rempli',
          'Caution de sécurité',
          'Reçu de paiement des frais de location',
          'Description et programme de l\'événement'
        ],
    timeline: currentLang === 'en' ? '3-5 working days' : '3-5 jours ouvrables',
    notes: currentLang === 'en'
      ? 'Advance booking required at least 2 weeks before the event'
      : 'Réservation requise au moins 2 semaines avant l\'événement'
  };

  const halls = [
    {
      id: 'main-hall',
      name: currentLang === 'en' ? 'Main Municipal Hall' : 'Grande Salle Municipale',
      capacity: '500',
      price: 150000
    },
    {
      id: 'conference-hall',
      name: currentLang === 'en' ? 'Conference Hall' : 'Salle de Conférence',
      capacity: '200',
      price: 100000
    },
    {
      id: 'ceremony-hall',
      name: currentLang === 'en' ? 'Ceremony Hall' : 'Salle de Cérémonie',
      capacity: '300',
      price: 125000
    },
    {
      id: 'meeting-room',
      name: currentLang === 'en' ? 'Meeting Room' : 'Salle de Réunion',
      capacity: '50',
      price: 50000
    }
  ];

  // Helper function to format prices based on language
  const formatPrice = (price) => {
    return price.toLocaleString(currentLang === 'en' ? 'en-US' : 'fr-FR');
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Hall Rental Services' : 'Services de Location de Salles'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en'
            ? 'Information about renting municipal halls for your events in Mbalmayo.'
            : 'Informations sur la location des salles municipales pour vos événements à Mbalmayo.'}
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left side - Rental Information */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-lg bg-primary-100 p-3 text-primary-600">
                {rentalInfo.icon}
              </div>
              <h2 className="text-2xl font-semibold">{rentalInfo.title}</h2>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 flex items-center text-lg font-medium">
                <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                {currentLang === 'en' ? 'Requirements' : 'Documents Requis'}
              </h3>
              <ul className="space-y-2 text-neutral-600">
                {rentalInfo.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                <span className="font-medium">
                  {currentLang === 'en' ? 'Processing Time: ' : 'Délai de Traitement: '}
                </span>
                <span className="ml-2 text-neutral-600">{rentalInfo.timeline}</span>
              </div>
              <p className="mt-3 text-sm text-neutral-600">
                {currentLang === 'en'
                  ? 'You can also fill out the booking form on this page to start your request.'
                  : 'Vous pouvez également remplir le formulaire de réservation sur cette page pour commencer votre demande.'}
              </p>
            </div>

            <div className="flex items-start rounded-lg bg-amber-50 p-4">
              <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-600" />
              <p className="text-sm text-amber-800">{rentalInfo.notes}</p>
            </div>
          </div>

          {/* Right side - Booking Form */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-6 text-2xl font-semibold">
              {currentLang === 'en' ? 'Hall Booking Form' : 'Formulaire de Réservation'}
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'Full Name' : 'Nom Complet'}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder={currentLang === 'en' ? 'Enter your full name' : 'Entrez votre nom complet'}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'ID Card Number' : 'Numéro de Carte d\'Identité'}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder={currentLang === 'en' ? 'Enter your ID card number' : 'Entrez votre numéro de carte d\'identité'}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'Phone Number' : 'Numéro de Téléphone'}
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder={currentLang === 'en' ? 'Enter your phone number' : 'Entrez votre numéro de téléphone'}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'Email Address' : 'Adresse Email'}
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder={currentLang === 'en' ? 'Enter your email address' : 'Entrez votre adresse email'}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'Select Hall' : 'Choisir une Salle'}
                </label>
                <select
                  value={selectedHall}
                  onChange={(e) => setSelectedHall(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                >
                  <option value="">
                    {currentLang === 'en' ? '-- Select a hall --' : '-- Choisir une salle --'}
                  </option>
                  {halls.map((hall) => (
                    <option key={hall.id} value={hall.id}>
                      {`${hall.name} (${currentLang === 'en' ? 'Capacity' : 'Capacité'}: ${hall.capacity}) - ${formatPrice(hall.price)} FCFA`}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'Event Date' : 'Date de l\'Événement'}
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {currentLang === 'en' ? 'Event Type' : 'Type d\'Événement'}
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-neutral-300 p-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder={currentLang === 'en' ? 'e.g. Wedding, Conference' : 'ex: Mariage, Conférence'}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                {currentLang === 'en' ? 'Submit Booking Request' : 'Soumettre la Demande'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallRental;