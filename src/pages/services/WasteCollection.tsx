import { useTranslation } from 'react-i18next';
import { Home, Clock, Wallet, CheckCircle, AlertCircle, FileCheck, MapPin } from 'lucide-react';

const BuildingPermits = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const permitInfo = {
    id: 'building-permit',
    icon: <Home className="h-8 w-8" />,
    title: currentLang === 'en' ? 'Building Permit' : 'Permis de Construire',
    requirements: currentLang === 'en' 
      ? [
          'Land title or certificate of ownership',
          'Architectural plans (4 copies)',
          'Site location plan',
          'Valid National ID card (original and copy)',
          'Tax clearance certificate',
          'Environmental impact assessment (for large projects)',
          'Processing fee based on project size'
        ]
      : [
          'Titre foncier ou certificat de propriété',
          'Plans architecturaux (4 copies)',
          'Plan de situation du site',
          'Carte nationale d\'identité valide (original et copie)',
          'Attestation de non redevance',
          'Étude d\'impact environnemental (pour les grands projets)',
          'Frais de traitement selon la taille du projet'
        ],
    timeline: currentLang === 'en' ? '30-45 working days' : '30-45 jours ouvrables',
    notes: currentLang === 'en' 
      ? 'Must be obtained before starting any construction work'
      : 'Doit être obtenu avant de commencer tous travaux de construction'
  };

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Building Permits' : 'Permis de Construire'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en' 
            ? 'Information about obtaining building permits in Mbalmayo for construction projects.'
            : 'Informations sur l\'obtention des permis de construire à Mbalmayo pour les projets de construction.'}
        </p>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6 flex items-center">
            <div className="mr-4 rounded-lg bg-primary-100 p-3 text-primary-600">
              {permitInfo.icon}
            </div>
            <h2 className="text-2xl font-semibold">{permitInfo.title}</h2>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 flex items-center text-lg font-medium">
              <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
              {currentLang === 'en' ? 'Requirements' : 'Documents Requis'}
            </h3>
            <ul className="space-y-2 text-neutral-600">
              {permitInfo.requirements.map((req, index) => (
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
            <span className="ml-2 text-neutral-600">{permitInfo.timeline}</span>
          </div>

          <div className="flex items-start rounded-lg bg-amber-50 p-4">
            <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-600" />
            <p className="text-sm text-amber-800">{permitInfo.notes}</p>
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
                ? 'Visit the Urban Planning Department at the council for initial consultation'
                : 'Visitez le Service de l\'Urbanisme à la mairie pour une consultation initiale'}
            </li>
            <li className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Fees are calculated based on the total surface area and type of construction'
                : 'Les frais sont calculés en fonction de la surface totale et du type de construction'}
            </li>
            <li className="flex items-center">
              <FileCheck className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Regular inspections will be conducted during construction'
                : 'Des inspections régulières seront effectuées pendant la construction'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuildingPermits;