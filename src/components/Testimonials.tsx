import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-teal-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials')}
          </h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            {t('testimonialsSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-white"
                      />
                      <div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-white/80">
                          {language === 'en' ? testimonial.tourType : testimonial.tourTypeTamil}
                        </p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic">
                      "{language === 'en' ? testimonial.comment : testimonial.commentTamil}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;