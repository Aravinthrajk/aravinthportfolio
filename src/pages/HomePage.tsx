import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import TourPackages from '../components/TourPackages';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Destinations />
      <TourPackages />
      <Services />
      <Testimonials />
    </div>
  );
};

export default HomePage;