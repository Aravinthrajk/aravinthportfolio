import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { templeTours } from '../data/templeTours';
import { MapPin, Clock, IndianRupee, X } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';

const TempleToursPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  const handleViewDetails = (tourId: number) => {
    setSelectedTour(tourId);
  };

  const closeModal = () => {
    setSelectedTour(null);
  };

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t('templeTourTitle')}
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          {t('templeTourDesc')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {templeTours.map((tour) => (
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

                <p className="text-gray-600 mb-6">
                  {language === 'en' ? tour.description : tour.descriptionTamil}
                </p>

                <button
                  onClick={() => handleViewDetails(tour.id)}
                  className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Temple Tour Details Modal */}
      {selectedTour !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {templeTours.map((tour) => tour.id === selectedTour && (
              <div key={tour.id}>
                <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {language === 'en' ? tour.name : tour.nameTamil}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tour.temples.map((temple, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={temple.image}
                          alt={language === 'en' ? temple.name : temple.nameTamil}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {language === 'en' ? temple.name : temple.nameTamil}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {language === 'en' ? temple.description : temple.descriptionTamil}
                          </p>
                          <div className="h-48 rounded-lg overflow-hidden">
                            <GoogleMap
                              center={temple.location}
                              markers={[{ position: temple.location, title: temple.name }]}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                      {t('bookNow')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TempleToursPage;