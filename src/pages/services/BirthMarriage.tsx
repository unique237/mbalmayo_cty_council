import { useTranslation } from 'react-i18next';
import { FileText, Users, Clock, Wallet, CheckCircle, AlertCircle } from 'lucide-react';

const BirthMarriage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const certificates = [
    {
      id: 'birth',
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: currentLang === 'en' ? 'Birth Certificate' : 'Acte de Naissance',
      requirements: currentLang === 'en' 
        ? [
            'Original birth declaration from the hospital',
            'Parents\' national ID cards (photocopies)',
            'Marriage certificate of parents (if applicable)',
            'Processing fee of 2 000 FCFA'
          ]
        : [
            'Déclaration de naissance originale de l\'hôpital',
            'Cartes nationales d\'identité des parents (photocopies)',
            'Acte de mariage des parents (le cas échéant)',
            'Frais de traitement de 2 000 FCFA'
          ],
      timeline: currentLang === 'en' ? '3-5 working days' : '3-5 jours ouvrables',
      notes: currentLang === 'en' 
        ? 'Declaration must be made within 90 days of birth'
        : 'La déclaration doit être faite dans les 90 jours suivant la naissance'
    },
    {
      id: 'marriage',
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: currentLang === 'en' ? 'Marriage Certificate' : 'Acte de Mariage',
      requirements: currentLang === 'en'
        ? [
            'Birth certificates of both spouses',
            'National ID cards of both spouses (originals and copies)',
            'Certificate of residence',
            'Two passport-size photos of each spouse',
            'Processing fee of 15 000 FCFA'
          ]
        : [
            'Actes de naissance des deux époux',
            'Cartes nationales d\'identité des deux époux (originaux et copies)',
            'Certificat de résidence',
            'Deux photos format passeport de chaque époux',
            'Frais de traitement de 15 000 FCFA'
          ],
      timeline: currentLang === 'en' ? '15-30 working days' : '15-30 jours ouvrables',
      notes: currentLang === 'en'
        ? 'Publication of banns required 10 days before ceremony'
        : 'Publication des bans requise 10 jours avant la cérémonie'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          {currentLang === 'en' ? 'Civil Status Services' : 'Services d\'État Civil'}
        </h1>
        <p className="mb-12 text-lg text-neutral-700">
          {currentLang === 'en' 
            ? 'Learn about the procedures and requirements for obtaining official documents from the Mbalmayo City Council.'
            : 'Découvrez les procédures et les exigences pour l\'obtention des documents officiels auprès de la Mairie de Mbalmayo.'}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {certificates.map((cert) => (
            <div key={cert.id} className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-6 flex items-center">
                <div className="mr-4 rounded-lg bg-primary-100 p-3 text-primary-600">
                  {cert.icon}
                </div>
                <h2 className="text-2xl font-semibold">{cert.title}</h2>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 flex items-center text-lg font-medium">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  {currentLang === 'en' ? 'Requirements' : 'Documents Requis'}
                </h3>
                <ul className="space-y-2 text-neutral-600">
                  {cert.requirements.map((req, index) => (
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
                <span className="ml-2 text-neutral-600">{cert.timeline}</span>
              </div>

              <div className="flex items-start rounded-lg bg-amber-50 p-4">
                <AlertCircle className="mr-2 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm text-amber-800">{cert.notes}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-primary-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-primary-900">
            {currentLang === 'en' ? 'Important Information' : 'Informations Importantes'}
          </h3>
          <ul className="space-y-3 text-primary-800">
            <li className="flex items-center">
              <Wallet className="mr-2 h-5 w-5" />
              {currentLang === 'en' 
                ? 'All fees must be paid at the council treasury'
                : 'Tous les frais doivent être payés à la trésorerie municipale'}
            </li>
            <li className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              {currentLang === 'en'
                ? 'Service hours: Monday to Friday, 8:00 AM - 3:30 PM'
                : 'Heures de service: Lundi à Vendredi, 8h00 - 15h30'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BirthMarriage;