import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">{t('about.title')}</h1>
        <p className="text-lg text-neutral-700">{t('about.subtitle')}</p>
        
        {/* This is a placeholder - would be expanded with actual content */}
        <div className="mt-8 rounded-lg bg-primary-50 p-8 text-center">
          <p className="text-primary-800">
            This page is under construction. Please check back soon for more information about the Mbalmayo City Council.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;