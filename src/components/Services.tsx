import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Map, Bus, Briefcase, Compass } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Compass size={40} />,
      titleKey: 'service1Title',
      descKey: 'service1Desc',
    },
    {
      icon: <Map size={40} />,
      titleKey: 'service2Title',
      descKey: 'service2Desc',
    },
    {
      icon: <Briefcase size={40} />,
      titleKey: 'service3Title',
      descKey: 'service3Desc',
    },
    {
      icon: <Bus size={40} />,
      titleKey: 'service4Title',
      descKey: 'service4Desc',
    },
  ];

  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('ourServices')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:translate-y-[-5px]"
            >
              <div className="text-teal-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(service.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;