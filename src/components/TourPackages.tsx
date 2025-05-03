import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { tourPackages } from '../data/packages';
import { Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const TourPackages: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('tourPackages')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('packagesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tourPackages.map((pkg) => (
            <Link
              key={pkg.id}
              to={`/packages/${pkg.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={language === 'en' ? pkg.name : pkg.nameTamil}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {language === 'en' ? pkg.name : pkg.nameTamil}
                  </h3>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock size={16} className="mr-1" />
                    <span>
                      {t('duration')}: {pkg.duration} {t('days')}
                    </span>
                  </div>
                  
                  <div className="flex items-start space-x-2 mb-4">
                    <MapPin size={16} className="text-gray-600 mt-1 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      {(language === 'en' ? pkg.destinations : pkg.destinationsTamil).join(', ')}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'en' ? pkg.description : pkg.descriptionTamil}
                  </p>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 mb-2">
                      {t('startingFrom')}:
                    </p>
                    <p className="text-xl font-bold text-orange-500">
                      ₹{pkg.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    {t('bookNow')}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;