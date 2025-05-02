import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const currentLang = i18n.language;

  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }

    const routeMap: { [key: string]: string } = {
      home: 'accueil',
      about: 'a-propos',
      services: 'services',
      news: 'actualites',
      facilities: 'installations',
      events: 'evenements',
      sports: 'sports',
      media: 'mediatheque',
      contact: 'contact',
    };

    const segments = path.split('/');
    if (segments.length > 0) {
      const mainRoute = segments[0];
      segments[0] = routeMap[mainRoute] || mainRoute;
    }

    return segments.join('/');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/${currentLang}/${getLocalizedPath('news')}?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const isActive = (path: string) => {
    // Get the current path without the language prefix
    const currentPath = location.pathname.split('/').slice(2).join('/');
    // Get the localized version of the provided path
    const localizedPath = getLocalizedPath(path);
    // Compare the current path with both the English and localized path
    return currentPath === path || currentPath === localizedPath || currentPath.startsWith(path + '/') || currentPath.startsWith(localizedPath + '/');
  };

  const navigationItems = [
    { label: t('navigation.home'), path: 'home', dropdown: null },
    {
      label: t('navigation.about'),
      path: 'about',
      dropdown: [
        { label: t('about.mayor'), path: 'about/mayor' },
        { label: t('about.councilMembers'), path: 'about/council-members' },
        { label: t('about.administration'), path: 'about/administration' },
        { label: t('about.history'), path: 'about/history' },
        { label: t('about.localGovernment'), path: 'about/local-government' },
      ],
    },
    {
      label: t('navigation.services'),
      path: 'services',
      dropdown: [
        { label: t('services.birthMarriage'), path: 'services/birth-marriage' },
        { label: t('services.businessLicenses'), path: 'services/business-licenses' },
        { label: t('services.buildingPermits'), path: 'services/building-permits' },
        { label: t('services.wasteCollection'), path: 'services/waste-collection' },
        { label: t('services.allServices'), path: 'services/all' },
      ],
    },
    { label: t('navigation.news'), path: 'news', dropdown: null, className: 'whitespace-nowrap' },
    { label: t('navigation.facilities'), path: 'facilities', dropdown: null },
    { label: t('navigation.events'), path: 'events', dropdown: null },
    { label: t('navigation.contact'), path: 'contact', dropdown: null, className: 'whitespace-nowrap' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (item: string) => {
    if (activeDropdown === item) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
    }
  };

  const handleClickOutside = () => {
    setActiveDropdown(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 lg:px-0">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to={`/${currentLang}/${getLocalizedPath('home')}`} className="flex items-center space-x-2 lg:ml-0">
  <img
    src="https://res.cloudinary.com/dipmwyrfq/image/upload/v1746168715/logo_uedy1g.jpg"
    alt="Mbalmayo City Council Logo"
    className="h-8 w-8 object-contain"
  />
  <span className="font-serif text-lg font-semibold text-primary-800 md:text-xl lg:text-2xl">
    {currentLang === 'en' ? 'Mbalmayo Municipality' : 'Commune de Mbalmayo'}
  </span>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:mx-auto lg:space-x-4">
            {navigationItems.map((item) => (
              <div
                key={item.path}
                className={`relative ${item.className || ''}`}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={`/${currentLang}/${getLocalizedPath(item.path)}`}
                  className={`nav-link group ${isActive(item.path) ? 'nav-link-active' : ''}`}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.path)}
                >
                  <span>{item.label}</span>
                  {item.dropdown && (
                    <ChevronDown className="ml-1 inline-block h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown && activeDropdown === item.path && (
                  <div className="absolute left-0 top-full mt-1 w-60 rounded-md bg-white p-2 shadow-lg">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={`/${currentLang}/${getLocalizedPath(dropdownItem.path)}`}
                        className="block rounded-sm px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                        onClick={handleClickOutside}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side: Search and Language */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              {!isSearchOpen ? (
                <button
                  onClick={toggleSearch}
                  className="rounded-full p-1.5 text-neutral-600 hover:bg-neutral-100 hover:text-primary-700"
                  aria-label={t('common.search')}
                >
                  <Search className="h-4 w-4" />
                </button>
              ) : (
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={currentLang === 'en' ? 'Search news...' : 'Rechercher...'}
                    className="rounded-md border border-neutral-300 px-2 py-1 text-sm w-32 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="rounded-full p-1.5 text-neutral-600 hover:bg-neutral-100 hover:text-primary-700"
                    aria-label={t('common.search')}
                  >
                    <Search className="h-4 w-4" />
                  </button>
                  <button
                    onClick={toggleSearch}
                    className="rounded-full p-1.5 text-neutral-600 hover:bg-neutral-100 hover:text-primary-700"
                    aria-label="Close search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>

            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              className="rounded-full p-2 text-neutral-600 hover:bg-neutral-100 hover:text-primary-700 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-white p-4 lg:hidden">
          <nav className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <div key={item.path} className="border-b border-neutral-100 py-2">
                {!item.dropdown ? (
                  <Link
                    to={`/${currentLang}/${getLocalizedPath(item.path)}`}
                    className={`block px-4 py-2 text-base ${
                      isActive(item.path) ? 'font-medium text-primary-700' : 'text-neutral-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`flex w-full items-center justify-between px-4 py-2 text-base ${
                        isActive(item.path) ? 'font-medium text-primary-700' : 'text-neutral-700'
                      }`}
                      onClick={() => toggleDropdown(item.path)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          activeDropdown === item.path ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === item.path && (
                      <div className="mt-1 pl-4">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={`/${currentLang}/${getLocalizedPath(dropdownItem.path)}`}
                            className="block py-2 pl-4 text-sm text-neutral-600 hover:text-primary-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="mt-4 flex items-center justify-center border-t border-neutral-100 pt-4">
              <form onSubmit={handleSearch} className="flex w-full max-w-sm">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={currentLang === 'en' ? 'Search news...' : 'Rechercher...'}
                  className="flex-1 rounded-l-md border border-neutral-300 px-3 py-1.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  className="flex items-center space-x-2 rounded-r-md bg-neutral-100 px-3 py-1.5 text-neutral-700 hover:bg-neutral-200"
                >
                  <Search className="h-4 w-4" />
                  <span className="text-sm">{t('common.search')}</span>
                </button>
              </form>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;