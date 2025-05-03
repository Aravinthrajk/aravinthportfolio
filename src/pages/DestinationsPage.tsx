import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { destinations, templeCircuits, honeymoonDestinations } from '../data/destinations';
import { MapPin, Calendar, Heart, Clock } from 'lucide-react';
import DestinationDetail from '../components/DestinationDetail';

const DestinationsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedType, setSelectedType] = useState<'destination' | 'temple' | 'honeymoon' | null>(null);
  const [activeTab, setActiveTab] = useState('destinations');

  const handleDestinationClick = (destination: any, type: 'destination' | 'temple' | 'honeymoon') => {
    setSelectedDestination(destination);
    setSelectedType(type);
  };

  const closeModal = () => {
    setSelectedDestination(null);
    setSelectedType(null);
  };

  return (
    <div className="pt-20 bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'destinations'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('destinations')}
            >
              All Destinations
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'temples'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('temples')}
            >
              Temple Circuits
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'honeymoon'
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('honeymoon')}
            >
              Honeymoon Destinations
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'destinations' && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Explore Our Destinations
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleDestinationClick(destination, 'destination')}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt={language === 'en' ? destination.name : destination.nameTamil}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
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
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {language === 'en' ? destination.description : destination.descriptionTamil}
                    </p>
                    <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'temples' && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Temple Circuits
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {templeCircuits.map((circuit) => (
                <div
                  key={circuit.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleDestinationClick(circuit, 'temple')}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={circuit.image}
                      alt={language === 'en' ? circuit.name : circuit.nameTamil}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {language === 'en' ? circuit.name : circuit.nameTamil}
                      </h3>
                      <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                        {language === 'en' ? circuit.duration : circuit.durationTamil}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {language === 'en' ? circuit.description : circuit.descriptionTamil}
                    </p>
                    <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'honeymoon' && (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Honeymoon Destinations
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {honeymoonDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleDestinationClick(destination, 'honeymoon')}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={destination.image}
                      alt={language === 'en' ? destination.name : destination.nameTamil}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Heart className="text-white fill-white" size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {language === 'en' ? destination.name : destination.nameTamil}
                      </h3>
                      <span className="bg-pink-100 text-pink-800 text-sm font-medium px-3 py-1 rounded-full">
                        {language === 'en' ? destination.duration : destination.durationTamil}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {language === 'en' ? destination.description : destination.descriptionTamil}
                    </p>
                    <div className="flex items-center mb-4">
                      <Calendar className="text-orange-500 mr-2" size={16} />
                      <span className="text-sm text-gray-600">
                        {language === 'en' ? destination.bestTimeToVisit : destination.bestTimeToVisitTamil}
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-lg font-bold text-orange-500">
                        ₹{destination.price.toLocaleString()} onwards
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {selectedDestination && selectedType && (
        <DestinationDetail
          destination={selectedDestination}
          type={selectedType}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default DestinationsPage;