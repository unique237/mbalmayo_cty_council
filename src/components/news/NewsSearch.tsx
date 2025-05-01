import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

interface NewsSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const NewsSearch: React.FC<NewsSearchProps> = ({ searchQuery, onSearchChange }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={currentLang === 'en' ? 'Search news...' : 'Rechercher des actualités...'}
        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 pl-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
      />
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
    </div>
  );
};

export default NewsSearch;