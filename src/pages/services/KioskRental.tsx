import React from 'react';
import { useTranslation } from 'react-i18next';
import { Store, Clock, Wallet, CheckCircle, AlertCircle, FileCheck, MapPin } from 'lucide-react';

const Publicity = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const publicityInfo = {
    id: 'publicity-service',
    icon: <Store className="h-8 w-8" />,
    title: currentLang === 'en' ? 'Advertising Services' : 'Services Publicitaires',
    requirements: currentLang === 'en' 
      ? [
          'Business registration documents',
          'Valid tax clearance certificate',
          'Advertisement content/design (3 copies)',
          'Location plan for billboards/signs',
          'Proof of payment for advertising fees',
          'Written request detailing advertising needs'
        ]
      : [
          'Documents d\'enregistrement de l\'entreprise',
          'Attestation de non redevance valide',
          'Contenu/design publicitaire (3 copies)',
          'Plan de localisation pour panneaux/enseignes',
          'Preuve de paiement des frais publicitaires',
          'Demande écrite détaillant les besoins publicitaires'
        ],
    timeline: currentLang === 'en' ? '7-10 working days' : '7-10 jours ouvrables',
    notes: currentLang === 'en' 
      ? 'All advertising must comply with municipal regulations and standards'
      : 'Toute publicité doit être conforme aux règlements et normes municipaux'
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Advertising Services' : 'Services Publicitaires'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en' 
            ? 'Information about advertising services and regulations in Mbalmayo.'
            : 'Informations sur les services et règlements publicitaires à Mbalmayo.'}
        </p>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-lg bg-primary-100 p-3 text-yellow-400">
              {publicityInfo.icon}
            </div>
            <h2 className="text-2xl font-semibold">{publicityInfo.title}</h2>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 flex items-center text-lg font-medium">
              <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
              {currentLang === 'en' ? 'Requirements' : 'Documents Requis'}
            </h3>
            <ul className="space-y-2 text-neutral-600">
              {publicityInfo.requirements.map((req, index) => (
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
            <span className="ml-2 text-neutral-600">{publicityInfo.timeline}</span>
          </div>

          <div className="flex items-start rounded-lg bg-amber-50 p-4">
            <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm text-amber-800">{publicityInfo.notes}</p>
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
                ? 'Advertising locations must be approved by the municipal authority'
                : 'Les emplacements publicitaires doivent être approuvés par l\'autorité municipale'}
            </li>
            <li className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Fees vary based on location, size, and duration of advertising'
                : 'Les frais varient selon l\'emplacement, la taille et la durée de la publicité'}
            </li>
            <li className="flex items-center">
              <FileCheck className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Annual renewal required for permanent advertising installations'
                : 'Renouvellement annuel requis pour les installations publicitaires permanentes'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Publicity;