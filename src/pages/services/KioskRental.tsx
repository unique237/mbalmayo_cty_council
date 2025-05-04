import React from 'react';
import { useTranslation } from 'react-i18next';
import { Store, Clock, Wallet, CheckCircle, AlertCircle, FileCheck, MapPin } from 'lucide-react';

const KioskRental = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const kioskInfo = {
    id: 'kiosk-rental',
    icon: <Store className="h-8 w-8" />,
    title: currentLang === 'en' ? 'Kiosk Rental Service' : 'Service de Location de Kiosque',
    requirements: currentLang === 'en' 
      ? [
          'Valid National ID card (original and copy)',
          'Business registration certificate',
          'Tax payer\'s card',
          'Two passport-size photos',
          'Proof of payment for rental fees',
          'Written request specifying preferred location'
        ]
      : [
          'Carte nationale d\'identité valide (original et copie)',
          'Certificat d\'enregistrement commercial',
          'Carte de contribuable',
          'Deux photos format passeport',
          'Preuve de paiement des frais de location',
          'Demande écrite spécifiant l\'emplacement souhaité'
        ],
    timeline: currentLang === 'en' ? '5-7 working days' : '5-7 jours ouvrables',
    notes: currentLang === 'en' 
      ? 'Kiosks are allocated based on availability and business type compatibility'
      : 'Les kiosques sont attribués selon la disponibilité et la compatibilité du type d\'activité'
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Municipal Kiosk Rental' : 'Location de Kiosque Municipal'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en' 
            ? 'Information about renting municipal kiosks for your business activities in Mbalmayo.'
            : 'Informations sur la location des kiosques municipaux pour vos activités commerciales à Mbalmayo.'}
        </p>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-lg bg-primary-100 p-3 text-yellow-400">
              {kioskInfo.icon}
            </div>
            <h2 className="text-2xl font-semibold">{kioskInfo.title}</h2>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 flex items-center text-lg font-medium">
              <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
              {currentLang === 'en' ? 'Requirements' : 'Documents Requis'}
            </h3>
            <ul className="space-y-2 text-neutral-600">
              {kioskInfo.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-blue-600" />
            <span className="font-medium">
              {currentLang === 'en' ? 'Processing Time: ' : 'Délai de Traitement: '}
            </span>
            <span className="ml-2 text-neutral-600">{kioskInfo.timeline}</span>
          </div>

          <div className="flex items-start rounded-lg bg-amber-50 p-4">
            <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm text-amber-800">{kioskInfo.notes}</p>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-primary-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-primary-900">
            {currentLang === 'en' ? 'Additional Information' : 'Informations Supplémentaires'}
          </h3>
          <ul className="space-y-3 text-primary-800">
            <li className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              {currentLang === 'en' 
                ? 'Kiosks are available in various strategic locations around the city'
                : 'Les kiosques sont disponibles dans divers endroits stratégiques de la ville'}
            </li>
            <li className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Monthly rental fees vary based on location and kiosk size'
                : 'Les frais de location mensuels varient selon l\'emplacement et la taille du kiosque'}
            </li>
            <li className="flex items-center">
              <FileCheck className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Annual contract renewal required with updated documentation'
                : 'Renouvellement annuel du contrat requis avec mise à jour des documents'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KioskRental;