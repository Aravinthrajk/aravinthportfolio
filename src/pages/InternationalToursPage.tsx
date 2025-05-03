import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { internationalTours } from '../data/internationalTours';
import { MapPin, Clock, IndianRupee } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';

const InternationalToursPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t('internationalTitle')}
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          {t('internationalDesc')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internationalTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={tour.image}
                  alt={language === 'en' ? tour.name : tour.nameTamil}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {language === 'en' ? tour.name : tour.nameTamil}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock size={20} className="mr-2" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <IndianRupee size={20} className="mr-2" />
                    <span>₹{tour.price.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {language === 'en' ? tour.description : tour.descriptionTamil}
                </p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="text-orange-500 mr-2" />
                    <span className="font-semibold text-gray-700">Destinations:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tour.destinations.map((dest, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-2">Package Includes:</h3>
                  <ul className="space-y-2">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-orange-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-64 mb-6 rounded-lg overflow-hidden">
                  <GoogleMap
                    center={tour.location}
                    markers={[{ position: tour.location, title: tour.name }]}
                  />
                </div>

                <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                  {t('bookNow')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternationalToursPage;