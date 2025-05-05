import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Phone, Mail, MapPin } from 'lucide-react';

const CouncilMembers = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const councilMembers = [
    {
      id: 1,
      name: 'Jean Pierre Mengue',
      position: currentLang === 'en' ? '1st Deputy Mayor' : '1er Adjoint au Maire',
      department: currentLang === 'en' ? 'Finance and Budget' : 'Finances et Budget',
      contact: '+237 6xx xxx xxx',
      email: 'jp.mengue@mbalmayo.cm'
    },
    {
      id: 2,
      name: 'Marie Claire Essomba',
      position: currentLang === 'en' ? '2nd Deputy Mayor' : '2ème Adjoint au Maire',
      department: currentLang === 'en' ? 'Social Affairs' : 'Affaires Sociales',
      contact: '+237 6xx xxx xxx',
      email: 'mc.essomba@mbalmayo.cm'
    },
    {
      id: 3,
      name: 'Paul Atangana',
      position: currentLang === 'en' ? '3rd Deputy Mayor' : '3ème Adjoint au Maire',
      department: currentLang === 'en' ? 'Urban Planning' : 'Urbanisme',
      contact: '+237 6xx xxx xxx',
      email: 'pb.atangana@mbalmayo.cm'
    },
    // More members to be added here
    
    {
      id: 4,
      name: 'Aissatou Nguefack',
      position: currentLang === 'en' ? 'Secretary General' : 'Secrétaire Général',
      department: currentLang === 'en' ? 'Administration' : 'Administration',
      contact: '+237 6xx xxx xxx',
      email: 'as.ngefack@mbalmayo.cm'
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            {currentLang === 'en' ? 'Council Members' : 'Membres du Conseil'}
          </h1>
          <p className="text-lg text-neutral-700">
            {currentLang === 'en'
              ? 'Meet the dedicated council members serving the Mbalmayo community.'
              : 'Découvrez les membres du conseil dévoués au service de la communauté de Mbalmayo.'}
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <img
            src="https://res.cloudinary.com/dipmwyrfq/image/upload/v1746444878/Screenshot_2025-05-05_115617_wgmq4n.png"
            alt="Mbalmayo City Council"
            className="h-[400px] w-full object-fill"
          />
        </div>

        {/* Council Members List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {councilMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-lg bg-white p-6 shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 rounded-full bg-primary-100 p-3">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">{member.name}</h3>
                  <p className="text-sm text-primary-600">{member.position}</p>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-neutral-600">
                <p className="font-medium text-neutral-900">{member.department}</p>
                
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>{member.contact}</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>{member.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 rounded-lg bg-primary-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-primary-900">
            {currentLang === 'en' ? 'Council Information' : 'Informations du Conseil'}
          </h2>
          <div className="flex items-start space-x-2 text-primary-800">
            <MapPin className="h-5 w-5 flex-shrink-0" />
            <p>
              {currentLang === 'en'
                ? 'Council meetings are held every last Friday of the month at the City Hall.'
                : 'Les réunions du conseil se tiennent chaque dernier vendredi du mois à l\'Hôtel de Ville.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilMembers;