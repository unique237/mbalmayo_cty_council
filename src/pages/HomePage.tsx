import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/home/Hero';
import QuickServices from '../components/home/QuickServices';
import MbalmayoShowcase from '../components/home/MbalmayoShowcase';
import NewsHighlights from '../components/home/NewsHighlights';
import MayorMessage from '../components/home/MayorMessage';
import DiscoverMbyo from '../components/home/DiscoverMbyo';
import EventsCalendar from '../components/home/EventsCalendar';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero />
      <QuickServices />
      <MbalmayoShowcase />
      <NewsHighlights />
      <MayorMessage />
      <DiscoverMbyo />
      <EventsCalendar />
    </div>
  );
};

export default HomePage;