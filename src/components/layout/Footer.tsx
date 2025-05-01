import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Landmark, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to subscribe the email
    setSubscribeStatus('success');
    setTimeout(() => setSubscribeStatus('idle'), 3000);
    setEmail('');
  };
  
  const getLocalizedPath = (path: string) => {
    if (currentLang === 'en') {
      return path;
    }
    
    const routeMap: {[key: string]: string} = {
      'home': 'accueil',
      'about': 'a-propos',
      'services': 'services',
      'news': 'actualites',
      'facilities': 'installations',
      'events': 'evenements',
      'sports': 'sports',
      'media': 'mediatheque',
      'contact': 'contact'
    };
    
    const segments = path.split('/');
    if (segments.length > 0) {
      const mainRoute = segments[0];
      segments[0] = routeMap[mainRoute] || mainRoute;
    }
    
    return segments.join('/');
  };
  
  const quickLinks = [
    { label: t('navigation.home'), path: 'home' },
    { label: t('navigation.services'), path: 'services' },
    { label: t('navigation.news'), path: 'news' },
    { label: t('navigation.events'), path: 'events' },
    { label: t('navigation.contact'), path: 'contact' }
  ];
  
  const aboutLinks = [
    { label: t('about.mayor'), path: 'about/mayor' },
    { label: t('about.councilMembers'), path: 'about/council-members' },
    { label: t('about.history'), path: 'about/history' },
    { label: t('about.localGovernment'), path: 'about/local-government' }
  ];
  
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: 'https://youtube.com', label: 'Youtube' }
  ];
  
  return (
    <footer className="bg-primary-900 text-neutral-200">
      {/* Newsletter Section */}
      <div className="border-b border-primary-800 py-12">
        <div className="container-custom">
          <div className="mx-auto max-w-xl text-center">
            <h3 className="mb-2 font-serif text-2xl font-medium text-white">
              {currentLang === 'en' ? 'Subscribe to Our Newsletter' : 'Abonnez-vous à Notre Newsletter'}
            </h3>
            <p className="mb-6 text-neutral-300">
              {currentLang === 'en'
                ? 'Stay updated with the latest news and announcements'
                : 'Restez informé des dernières actualités et annonces'}
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={currentLang === 'en' ? 'Enter your email' : 'Entrez votre email'}
                className="w-full rounded-full bg-primary-800 px-6 py-3 pr-12 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary-600 p-2 text-white transition-colors hover:bg-primary-500"
                aria-label={currentLang === 'en' ? 'Subscribe' : 'S\'abonner'}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            {subscribeStatus === 'success' && (
              <p className="mt-2 text-sm text-green-400">
                {currentLang === 'en'
                  ? 'Thank you for subscribing!'
                  : 'Merci de votre abonnement !'}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <div>
            <Link to={`/${currentLang}/${getLocalizedPath('home')}`} className="flex items-center space-x-2">
              <Landmark className="h-8 w-8 text-primary-300" />
              <span className="font-serif text-lg font-semibold text-white md:text-xl">
                {currentLang === 'en' ? 'Mbalmayo City Council' : 'Mairie de Mbalmayo'}
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-300">
              {currentLang === 'en' 
                ? 'Serving our community with excellence and integrity since 1954.'
                : 'Servir notre communauté avec excellence et intégrité depuis 1954.'}
            </p>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary-800 p-2 text-white transition-colors hover:bg-primary-700"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-medium text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${currentLang}/${getLocalizedPath(link.path)}`}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-medium text-white">{t('navigation.about')}</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={`/${currentLang}/${getLocalizedPath(link.path)}`}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-medium text-white">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary-300" />
                <span className="text-neutral-300">
                  Hôtel de ville, Avenue principale<br />
                  Mbalmayo, Cameroun
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-300" />
                <span className="text-neutral-300">+237 222 28 46 20</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-300" />
                <span className="text-neutral-300">contact@mbalmayo.cm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-primary-800 bg-primary-950 py-6">
        <div className="container-custom">
          <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-neutral-400 md:flex-row md:space-y-0 md:text-left">
            <div>{t('footer.copyright')}</div>
            <div className="flex space-x-4">
              <Link to={`/${currentLang}/privacy-policy`} className="hover:text-white">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to={`/${currentLang}/terms-of-service`} className="hover:text-white">
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;