import React from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { tourPackages } from '../data/packages';
import { MapPin, Clock, Calendar, Car, Users, IndianRupee } from 'lucide-react';

const PackageDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const package_ = tourPackages.find(p => p.id === Number(id));

  if (!package_) {
    return <div className="pt-20 text-center">Package not found</div>;
  }

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <img
            src={package_.image}
            alt={language === 'en' ? package_.name : package_.nameTamil}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">
              {language === 'en' ? package_.name : package_.nameTamil}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>{package_.duration} Days</span>
              </div>
              <div className="flex items-center">
                <IndianRupee size={20} className="mr-2" />
                <span>₹{package_.price.toLocaleString()} onwards</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">
                {language === 'en' ? package_.description : package_.descriptionTamil}
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Package Includes</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(language === 'en' ? package_.includes : package_.includesTamil).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Destinations Covered</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(language === 'en' ? package_.destinations : package_.destinationsTamil).map((dest, index) => (
                  <div key={index} className="flex items-start">
                    <MapPin size={20} className="text-orange-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{dest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Vehicles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Car size={20} className="text-orange-500 mr-2" />
                    <h3 className="font-bold text-gray-800">Force Tempo Traveller</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Comfortable 12-seater vehicle, perfect for group tours</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Car size={20} className="text-orange-500 mr-2" />
                    <h3 className="font-bold text-gray-800">Toyota Innova Crysta</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Premium 7-seater SUV for luxury travel</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Car size={20} className="text-orange-500 mr-2" />
                    <h3 className="font-bold text-gray-800">Toyota Etios</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Comfortable sedan for small families</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Book This Package</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Starting Price</span>
                  <span className="text-xl font-bold text-orange-500">₹{package_.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-semibold">{package_.duration} Days</span>
                </div>
              </div>
              <button className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                Book Now
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                * Prices may vary based on season and availability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;