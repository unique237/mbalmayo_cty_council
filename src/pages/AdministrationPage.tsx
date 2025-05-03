import React from 'react';
import { useTranslation } from 'react-i18next';

const AdministrationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">{t('administration.title')}</h1>
      
      <div className="space-y-8">
        {/* Mayor's Office */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">{t('administration.mayorsOffice.title')}</h2>
          <p className="text-gray-700 mb-4">{t('administration.mayorsOffice.description')}</p>
        </section>

        {/* Secretary General */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">{t('administration.secretaryGeneral.title')}</h2>
          <p className="text-gray-700 mb-4">{t('administration.secretaryGeneral.description')}</p>
        </section>

        {/* Technical Services */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">{t('administration.technicalServices.title')}</h2>
          <p className="text-gray-700 mb-4">{t('administration.technicalServices.description')}</p>
        </section>

        {/* Financial Services */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">{t('administration.financialServices.title')}</h2>
          <p className="text-gray-700 mb-4">{t('administration.financialServices.description')}</p>
        </section>

        {/* Organizational Chart */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">{t('administration.organizationalChart')}</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <img 
              src="/images/placeholder-chart.jpg" 
              alt={t('administration.organizationalChartAlt')} 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdministrationPage;