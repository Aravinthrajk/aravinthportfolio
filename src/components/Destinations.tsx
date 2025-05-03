import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { destinations } from '../data/destinations';
import { MapPin } from 'lucide-react';

const Destinations: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeDestination, setActiveDestination] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveDestination(activeDestination === id ? null : id);
  };

  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('popularDestinations')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('destinationsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl ${
                activeDestination === destination.id ? 'lg:scale-105' : 'hover:scale-102'
              }`}
              onClick={() => handleCardClick(destination.id)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={language === 'en' ? destination.name : destination.nameTamil}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {language === 'en' ? destination.name : destination.nameTamil}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">
                    {language === 'en' ? destination.location : destination.locationTamil}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {language === 'en' ? destination.description : destination.descriptionTamil}
                </p>
                <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                  {t('viewDetails')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;