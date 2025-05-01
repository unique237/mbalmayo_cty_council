import { useTranslation } from 'react-i18next';
import { Store, Clock, Wallet, CheckCircle, AlertCircle, FileCheck, Building2 } from 'lucide-react';

const BusinessLicenses = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const licenses = [
    {
      id: 'trading',
      icon: <Store className="h-8 w-8" />,
      title: currentLang === 'en' ? 'Trading License' : 'Licence Commerciale',
      requirements: currentLang === 'en' 
        ? [
            'Valid National ID card (original and copy)',
            'Proof of business location (rent contract or property deed)',
            'Two passport-size photos',
            'Tax payer\'s card',
            'Processing fee of 25000 FCFA'
          ]
        : [
            'Carte nationale d\'identité valide (original et copie)',
            'Preuve de localisation de l\'entreprise (contrat de bail ou titre de propriété)',
            'Deux photos format passeport',
            'Carte de contribuable',
            'Frais de traitement de 25000 FCFA'
          ],
      timeline: currentLang === 'en' ? '5-7 working days' : '5-7 jours ouvrables',
      notes: currentLang === 'en' 
        ? 'Must be renewed annually before March 31st'
        : 'Doit être renouvelée annuellement avant le 31 mars'
    },
    {
      id: 'establishment',
      icon: <Building2 className="h-8 w-8" />,
      title: currentLang === 'en' ? 'Establishment License' : 'Licence d\'Établissement',
      requirements: currentLang === 'en'
        ? [
            'Business registration certificate',
            'Environmental impact assessment (if applicable)',
            'Fire safety certificate',
            'Location plan and building permit',
            'Processing fee of 50000 FCFA'
          ]
        : [
            'Certificat d\'immatriculation de l\'entreprise',
            'Étude d\'impact environnemental (le cas échéant)',
            'Certificat de sécurité incendie',
            'Plan de localisation et permis de construire',
            'Frais de traitement de 50000 FCFA'
          ],
      timeline: currentLang === 'en' ? '10-15 working days' : '10-15 jours ouvrables',
      notes: currentLang === 'en'
        ? 'Required for all commercial establishments within city limits'
        : 'Obligatoire pour tous les établissements commerciaux dans les limites de la ville'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Business Licenses' : 'Licences Commerciales'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en' 
            ? 'Information about obtaining and renewing business licenses in Mbalmayo.'
            : 'Informations sur l\'obtention et le renouvellement des licences commerciales à Mbalmayo.'}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {licenses.map((license) => (
            <div key={license.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-6 flex items-center">
                <div className="mr-4 rounded-lg bg-primary-100 p-3 text-primary-600">
                  {license.icon}
                </div>
                <h2 className="text-2xl font-semibold">{license.title}</h2>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 flex items-center text-lg font-medium">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  {currentLang === 'en' ? 'Requirements' : 'Documents Requis'}
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  {license.requirements.map((req, index) => (
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
                <span className="ml-2 text-neutral-600">{license.timeline}</span>
              </div>

              <div className="flex items-start rounded-lg bg-amber-50 p-4">
                <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm text-amber-800">{license.notes}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-primary-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-primary-900">
            {currentLang === 'en' ? 'Additional Information' : 'Informations Supplémentaires'}
          </h3>
          <ul className="space-y-3 text-primary-800">
            <li className="flex items-center">
              <FileCheck className="mr-2 h-5 w-5" />
              {currentLang === 'en' 
                ? 'All documents must be submitted in original form with two copies'
                : 'Tous les documents doivent être soumis en original avec deux copies'}
            </li>
            <li className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Payments can be made at the council treasury or via mobile money'
                : 'Les paiements peuvent être effectués à la trésorerie municipale ou par mobile money'}
            </li>
            <li className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Business hours: Monday to Friday, 8:00 AM - 3:30 PM'
                : 'Heures d\'ouverture: Lundi à Vendredi, 8h00 - 15h30'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessLicenses;