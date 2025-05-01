import React from 'react';
import { useTranslation } from 'react-i18next';

const MediaPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="py-12 md:py-16">
      <div className="container-custom">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">{t('navigation.media')}</h1>
        
        {/* This is a placeholder - would be expanded with actual content */}
        <div className="mt-8 rounded-lg bg-primary-50 p-8 text-center">
          <p className="text-primary-800">
            This page is under construction. Please check back soon for our media library.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;