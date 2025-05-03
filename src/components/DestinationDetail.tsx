import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Calendar, Plane, Train, Bus, Heart, Clock, IndianRupee } from 'lucide-react';
import { Destination, TempleCircuit, HoneymoonDestination } from '../data/destinations';
import GoogleMap from './GoogleMap';

interface DestinationDetailProps {
  destination: Destination | TempleCircuit | HoneymoonDestination;
  type: 'destination' | 'temple' | 'honeymoon';
  onClose: () => void;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination, type, onClose }) => {
  const { language } = useLanguage();

  const renderDestinationContent = () => {
    const dest = destination as Destination;
    return (
      <>
        <div className="prose max-w-none mb-8">
          <p className="text-gray-600">
            {language === 'en' ? dest.fullDescription : dest.fullDescriptionTamil}
          </p>
        </div>

        {dest.temples && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Famous Temples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dest.temples.map((temple, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <img
                    src={temple.image}
                    alt={language === 'en' ? temple.name : temple.nameTamil}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-bold text-gray-800 mb-2">
                    {language === 'en' ? temple.name : temple.nameTamil}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' ? temple.description : temple.descriptionTamil}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {dest.attractions && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Tourist Attractions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dest.attractions.map((attraction, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <img
                    src={attraction.image}
                    alt={language === 'en' ? attraction.name : attraction.nameTamil}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-bold text-gray-800 mb-2">
                    {language === 'en' ? attraction.name : attraction.nameTamil}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' ? attraction.description : attraction.descriptionTamil}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {dest.howToReach && (
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">How to Reach</h3>
            <div className="space-y-4">
              {dest.howToReach.map((transport, index) => (
                <div key={index} className="flex items-start">
                  {transport.mode === 'By Air' && <Plane className="text-orange-500 mr-2 mt-1" size={20} />}
                  {transport.mode === 'By Train' && <Train className="text-orange-500 mr-2 mt-1" size={20} />}
                  {transport.mode === 'By Bus' && <Bus className="text-orange-500 mr-2 mt-1" size={20} />}
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {language === 'en' ? transport.mode : transport.modeTamil}
                    </h4>
                    <p className="text-gray-600">
                      {language === 'en' ? transport.details : transport.detailsTamil}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  };

  const renderTempleCircuitContent = () => {
    const circuit = destination as TempleCircuit;
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-gray-600">
            <Clock size={20} className="mr-2" />
            <span>{language === 'en' ? circuit.duration : circuit.durationTamil}</span>
          </div>
          <div className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm">
            {language === 'en' ? circuit.state : circuit.stateTamil}
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          {language === 'en' ? circuit.description : circuit.descriptionTamil}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {circuit.temples.map((temple, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={temple.image}
                alt={language === 'en' ? temple.name : temple.nameTamil}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-gray-800 mb-2">
                  {language === 'en' ? temple.name : temple.nameTamil}
                </h4>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">
                    {language === 'en' ? temple.location : temple.locationTamil}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {language === 'en' ? temple.description : temple.descriptionTamil}
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderHoneymoonContent = () => {
    const honeymoon = destination as HoneymoonDestination;
    return (
      <>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-gray-600">
            <Clock size={20} className="mr-2" />
            <span>{language === 'en' ? honeymoon.duration : honeymoon.durationTamil}</span>
          </div>
          <div className="flex items-center text-pink-600">
            <Heart size={20} className="mr-2 fill-current" />
            <span className="font-medium">Honeymoon Special</span>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          {language === 'en' ? honeymoon.description : honeymoon.descriptionTamil}
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Package Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(language === 'en' ? honeymoon.highlights : honeymoon.highlightsTamil).map((highlight, index) => (
              <div key={index} className="flex items-center">
                <span className="text-pink-500 mr-2">✦</span>
                <span className="text-gray-600">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Calendar className="text-orange-500 mr-2" size={20} />
            <h3 className="text-xl font-bold text-gray-800">Best Time to Visit</h3>
          </div>
          <p className="text-gray-600">
            {language === 'en' ? honeymoon.bestTimeToVisit : honeymoon.bestTimeToVisitTamil}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500">
            ₹{honeymoon.price.toLocaleString()}
            <span className="text-sm text-gray-500 font-normal"> / couple</span>
          </div>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors">
            Book Now
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {language === 'en' ? destination.name : destination.nameTamil}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          <div className="aspect-video mb-6 rounded-lg overflow-hidden">
            <img
              src={destination.image}
              alt={language === 'en' ? destination.name : destination.nameTamil}
              className="w-full h-full object-cover"
            />
          </div>

          {type === 'destination' && renderDestinationContent()}
          {type === 'temple' && renderTempleCircuitContent()}
          {type === 'honeymoon' && renderHoneymoonContent()}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;